import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as nodemailer from "nodemailer";
import { HTTP400Error, HTTP404Error, HTTP403Error } from "./httpErrors";
import { invalidTokenError } from "./ErrorHandler";
import mongoose from "mongoose";
import { PERMISSION_TYPE } from "../constants";
import { CONSTANTS } from "../../config/config";

export class Utilities {

  /**
   * Return response in custom format
   * @param response
   */
  public static sendResponsData(response: any) {
    let result: any = {
      responseCode: response.code,
      responseMessage: response.message,
    };
    if (response.data) {
      result.data = response.data;
    }
    if (response.totalRecord) {
      result.totalRecord = response.totalRecord;
    }
    return result;
  }

  /**
   * Generate encrypted password
   * @param {string} password
   */
  public static cryptPassword = async (password: string) => {
    return new Promise(function (resolve, reject) {
      return bcrypt.hash(
        password,
        CONSTANTS.SALT,
        (err: any, hash: any) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(hash);
          }
        }
      );
    });
  };

  /**
   * Verify password
   * @param {string} password
   */
  public static VerifyPassword = async (password: string, hash: string) => {
    return new Promise(function (resolve, reject) {
      return bcrypt.compare(password, hash, (error: any, result: any) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(result);
        }
      });
    });
  };

  /**
   * Create jwt token
   * @param {object} payload
   * @param {string} token - return token
   */
  public static createJWTToken = async (payload: any) => {
    return jwt.sign(payload, CONSTANTS.SECRET || '', { expiresIn: '24h' });
  };

  /**
   * Verify token is valid or not
   * @param {string} token
   */
  public static verifyToken = async (token: any) => {
    return new Promise(function (resolve, reject) {
      jwt.verify(
        token,
        CONSTANTS.SECRET,
        async function (error: any, result: any) {
          if (error) {
            return reject(error);
          } else {
            return resolve(result);
          }
        }
      );
    })

  };

  public static commonVerifyToken = async (token: any) => {
    return new Promise(function (resolve, reject) {
      jwt.verify(
        token,
        CONSTANTS.SECRET,
        async function (error: any, result: any) {
          if (error) {
            return reject(error);
          } else {
            return resolve(result);
          }
        }
      );
    })
  };

  /**
   * decoded jwt token
   * @param token string
   */
  public static getDecoded = async (token: any) => {
    return jwt.decode(token);
  };

  /**
   * check Super admin or sub admin
   * @param token string
   */
  public static isAdmin = async (token: any) => {
    const decoded: any = await Utilities.getDecoded(token);

    if (
      decoded.user_type === "Super-Admin" ||
      decoded.user_type === "Sub-Admin"
    )
      return true;
    return false;
  };

  /**
   * Generate alphanumer random string of given length
   * @param length
   */
  public static genAlphaNumericCode(length: number) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * 
   * @param length of otp we want to generate
   * @returns numeric code for specified length
   */
  public static genNumericCode(length: number) {
    let min = Math.pow(10, length - 1);
    let max = (Math.pow(10, length) - Math.pow(10, length - 1) - 1);
    return Math.floor(min + Math.random() * max)
  }


  public static getUserToken(user: any) {
    var claims = {
      id: user._id,
      name: user.name,
      email: user.email,
      photo: user.photo,
      role: user.role,
      session: user.tokenKey,
      uid: user.uid,
    };

    return jwt.sign(claims, CONSTANTS.SECRET || '', {
      expiresIn: '2hr'
    });
  }

  public static generateActivationToken = async () => {
    return Math.random().toString(36).substring(2);
  }

}

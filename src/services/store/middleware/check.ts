import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../../../utils/httpErrors";
import Joi from "joi";
import { Utilities } from "../../../utils/Utilities";
import { errorMessageHander } from "../../../utils/ErrorHandler";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    storeFormatId: Joi.number().required(),
    retailChainId: Joi.number().required(),
    storeName: Joi.string().trim(true).required().messages({
      "string.empty": "Store Name can not be empty",
    }),
    storePriority: Joi.string().trim(true).required().messages({
      "string.empty": "Store priority can not be empty",
    }),
    storeArea: Joi.string().trim(true).required().messages({
      "string.empty": "Store area can not be empty",
    }),
    storeType: Joi.string().trim(true).required().messages({
      "string.empty": "Store type can not be empty",
    }),
    storeAddress: Joi.string().trim(true).required().messages({
      "string.empty": "Store address can not be empty",
    }),
    storeLocation: Joi.string().trim(true).required().messages({
      "string.empty": "Store location can not be empty",
    })
  });
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    let messageArr = errorMessageHander(error.details);
    throw new HTTP400Error(
      Utilities.sendResponsData({
        code: 400,
        message: messageArr[0],
      })
    );
  } else {
    req.body = value;
    next();
  }
};

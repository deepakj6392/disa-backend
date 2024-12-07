import * as nodemailer from "nodemailer";
import { HTTP400Error, HTTP404Error, HTTP403Error } from "./httpErrors";
import { Utilities } from "./Utilities";
var sgTransport = require('nodemailer-sendgrid-transport');

export class MailerUtilities {


  public static sendSendgridMail = async (data: any) => {
    try {
    var options = {
      auth: {
        api_key: "sendgrid-api-key",
      }
    }

    var mailer = nodemailer.createTransport(sgTransport(options));


    var message: any = {
      to: [...data.recipient_email],
      cc: ['nddd@ff.com'],
      from: "sender@gmail.com",
      subject: data.subject,
      text: data.text,
      html: data.text
    };

    if (data.cc) {
      message.cc = [...data.cc]
    }

    if (data.attachments) {
      message.attachments = [
        {
          filename: 'test.txt',
          path: __dirname + '/test.txt'
        }
      ]
    }
    const mailRes = await mailer.sendMail(message);
    return mailRes;
  } catch (error) {
    throw new HTTP400Error( 
      Utilities.sendResponsData({
        code: 400,
        message: "Issue in sendgrid",
      })  
    );
  }
  }


  /**
   * Send email using smtp
   * @param data include (recipient_email,subject,message,attachments)
   */
  public static sendSMTPEmail = async (data: any) => {
    return new Promise(function   (resolve, reject) {
      let transporter = nodemailer.createTransport({
        host: "hostname",
        port: 4333,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "gdfgdfgdf",
          pass: "fdgfdgdfg",
        },
        tls: {
          rejectUnauthorized: false
        },
      });

      const mailData: any = {
        from: {
          name: "cxvxcvx",
          address: "xcvcxvxcvx",
        },
        to: data.recipient_email,
        subject: data.subject,
        html: data.text,
      };
      if (data.attachments) {
        mailData.attachments = data.attachments;
      }
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(info);
        }
      });
    });
  };

}
import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../../../utils/httpErrors";
import Joi from "joi";
import { Utilities } from "../../../utils/Utilities";
import { errorMessageHander } from "../../../utils/ErrorHandler";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    questionCategory: Joi.string().trim(true).required().messages({
      "string.empty": "Category can not be empty",
    }),
    questionSubCategory: Joi.string().trim(true).required().messages({
      "string.empty": "Sub Category can not be empty",
    }),
    questionChildCategory: Joi.string().trim(true).required().messages({
      "string.empty": "Child Category can not be empty",
    }),
    description: Joi.string().trim(true).required().messages({
      "string.empty": "Description can not be empty",
    }),
    questionHint: Joi.string().trim(true),
    screenType: Joi.string().trim(true).required().messages({
      "string.empty": "Screen type can not be empty",
    }),
    responseType: Joi.string().required().messages({
      "string.empty": "Response Type not be empty",
    }),
    placeArea: Joi.string()
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

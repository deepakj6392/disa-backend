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
    longQuestion: Joi.string().trim(true).required().messages({
      "string.empty": "Long question can not be empty",
    }),
    shortQuestion: Joi.string().trim(true).required().messages({
      "string.empty": "Short question can not be empty",
    }),
    screenType: Joi.string().trim(true).required().messages({
      "string.empty": "Screen type can not be empty",
    }),
    usedForDeviation: Joi.bool().required().messages({
      "bool.empty": "Deviation can not be empty",
    }),
    skuSpecific: Joi.string().trim(true).required().messages({
      "string.empty": "SKU specific can not be empty",
    }),
    storeDisplayLocation: Joi.string().trim(true).required().messages({
      "string.empty": "Store display location can not be empty",
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

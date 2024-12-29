import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../../../utils/httpErrors";
import Joi from "joi";
import { Utilities } from "../../../utils/Utilities";
import { errorMessageHander } from "../../../utils/ErrorHandler";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    questionId: Joi.number().required(),
    brandId: Joi.number().required(),
    productId: Joi.number().required(),
    skuId: Joi.number().required(),
    visitId: Joi.number().required(),
    expectedResponse: Joi.string().required().label("Expected response"),
    surveyorResponse: Joi.string().required().label("Surveyor response"),
    baseScore: Joi.number().required().label("Base Score"),
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

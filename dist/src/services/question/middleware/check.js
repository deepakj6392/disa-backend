"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const httpErrors_1 = require("../../../utils/httpErrors");
const joi_1 = __importDefault(require("joi"));
const Utilities_1 = require("../../../utils/Utilities");
const ErrorHandler_1 = require("../../../utils/ErrorHandler");
const validate = (req, res, next) => {
    const schema = joi_1.default.object({
        questionCategory: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Category can not be empty",
        }),
        questionSubCategory: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Sub Category can not be empty",
        }),
        questionChildCategory: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Child Category can not be empty",
        }),
        longQuestion: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Long question can not be empty",
        }),
        shortQuestion: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Short question can not be empty",
        }),
        screenType: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Screen type can not be empty",
        }),
        usedForDeviation: joi_1.default.bool().required().messages({
            "bool.empty": "Deviation can not be empty",
        }),
        skuSpecific: joi_1.default.string().trim(true).required().messages({
            "string.empty": "SKU specific can not be empty",
        }),
        storeDisplayLocation: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store display location can not be empty",
        })
    });
    const { error, value } = schema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        let messageArr = (0, ErrorHandler_1.errorMessageHander)(error.details);
        throw new httpErrors_1.HTTP400Error(Utilities_1.Utilities.sendResponsData({
            code: 400,
            message: messageArr[0],
        }));
    }
    else {
        req.body = value;
        next();
    }
};
exports.validate = validate;
//# sourceMappingURL=check.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validate = void 0;
const httpErrors_1 = require("../../../utils/httpErrors");
const joi_1 = __importDefault(require("joi"));
const Utilities_1 = require("../../../utils/Utilities");
const ErrorHandler_1 = require("../../../utils/ErrorHandler");
const validate = (req, res, next) => {
    const schema = joi_1.default.object({
        firstName: joi_1.default.string().trim(true).required().messages({
            "string.empty": "First Name can not be empty",
        }),
        lastName: joi_1.default.string().trim(true).required().messages({
            "string.empty": "First Name can not be empty",
        }),
        username: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Username can not be empty",
        }),
        email: joi_1.default.string().trim(true).email().required().messages({
            "string.empty": "Email can not be empty",
        }),
        mobile: joi_1.default.string().trim(true).optional(),
        password: joi_1.default.string()
            .trim(true)
            .min(8)
            .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            .required()
            .messages({
            "string.empty": "Password can not be empty",
            "string.min": "Password must include atleast 8 characters",
            "string.pattern.base": "Password must include atleast 1 number and 1 special character"
        }),
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
const validateLogin = (req, res, next) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Username can not be empty",
        }),
        password: joi_1.default.string()
            .trim(true)
            .min(8)
            .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            .required()
            .messages({
            "string.empty": "Password can not be empty",
            "string.min": "Password must include atleast 8 characters",
            "string.pattern.base": "Password must include atleast 1 number and 1 special character"
        }),
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
exports.validateLogin = validateLogin;
//# sourceMappingURL=check.js.map
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
        storeFormatId: joi_1.default.number().required(),
        retailChainId: joi_1.default.number().required(),
        storeName: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store Name can not be empty",
        }),
        storePriority: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store priority can not be empty",
        }),
        storeArea: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store area can not be empty",
        }),
        storeType: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store type can not be empty",
        }),
        storeAddress: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store address can not be empty",
        }),
        storeLocation: joi_1.default.string().trim(true).required().messages({
            "string.empty": "Store location can not be empty",
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
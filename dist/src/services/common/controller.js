"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const httpErrors_1 = require("../../utils/httpErrors");
const Utilities_1 = require("../../utils/Utilities");
const FileUploadUtilities_1 = require("../../utils/FileUploadUtilities");
var mongoose = require("mongoose");
const fileUpload = (token, req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = yield Utilities_1.Utilities.getDecoded(token);
        const files = req.files;
        if (files && files.length > 0) {
            const uploadPromises = files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
                return FileUploadUtilities_1.FileUpload.uploadFileToAWS(file, req.body.type || "profile", null);
            }));
            const fileResponses = yield Promise.all(uploadPromises);
            const imagesData = fileResponses.map((item) => ({
                url: item.Location.toString(),
                fileName: item.key,
            }));
            return Utilities_1.Utilities.sendResponsData({
                code: 200,
                message: "Successfully uploaded",
                data: imagesData,
            });
        }
        else {
            throw new httpErrors_1.HTTP400Error(Utilities_1.Utilities.sendResponsData({
                code: 400,
                message: "Failed to upload",
            }));
        }
    }
    catch (error) {
        next(error);
    }
});
exports.fileUpload = fileUpload;
//# sourceMappingURL=controller.js.map
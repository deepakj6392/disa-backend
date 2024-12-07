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
const controller_1 = require("./controller");
const config_1 = require("../../../config/config");
const basePath = config_1.CONSTANTS.BASE_PATH;
const currentPath = "common/";
const currentPathURL = basePath + currentPath;
exports.default = [
    {
        path: currentPathURL + 'fileUpload',
        method: "post",
        handler: [
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.fileUpload)(req.get(config_1.CONSTANTS.AUTHORIZATION), req, next);
                res.status(200).send(result);
            })
        ]
    },
];
//# sourceMappingURL=routes.js.map
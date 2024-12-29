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
const checks_1 = require("../../middleware/checks");
const check_1 = require("./middleware/check");
const configuration_1 = require("../../../config/configuration");
const controller_1 = require("./controller");
const basePath = configuration_1.CONSTANTS.BASE_PATH;
const currentPath = "retail-chain/";
const currentPathURL = basePath + currentPath;
exports.default = [
    {
        path: currentPathURL + "create",
        method: "post",
        handler: [
            check_1.validate,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.createRetailChain)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + 'getAllRetailChain',
        method: "get",
        handler: [
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.findAllRetailChain)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + ":id",
        method: "put",
        handler: [
            checks_1.checkAuthenticate,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.updateRetailChainById)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL,
        method: "get",
        handler: [
            checks_1.checkAuthenticate,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.getRetailChainById)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + ":id",
        method: "delete",
        handler: [
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.deleteRetailChainById)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
];
//# sourceMappingURL=routes.js.map
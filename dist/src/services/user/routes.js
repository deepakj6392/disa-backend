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
const controller_1 = require("./controller");
const config_1 = require("../../../config/config");
const basePath = config_1.CONSTANTS.BASE_PATH;
const currentPath = "user/";
const currentPathURL = basePath + currentPath;
exports.default = [
    {
        path: currentPathURL + "create",
        method: "post",
        handler: [
            check_1.validate,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.createUser)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + "login",
        method: "post",
        handler: [
            check_1.validateLogin,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.loginUser)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + 'getAllUsers',
        method: "get",
        handler: [
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.findAllUsers)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    // update profile by user
    {
        path: currentPathURL + "profileUpdate",
        method: "put",
        handler: [
            checks_1.checkAuthenticate,
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.updateById)(req, next);
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
                const result = yield (0, controller_1.getUserById)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
    {
        path: currentPathURL + "deleteUser" + "/:id",
        method: "delete",
        handler: [
            (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield (0, controller_1.deleteById)(req, next);
                res.status(200).send(result);
            }),
        ],
    },
];
//# sourceMappingURL=routes.js.map
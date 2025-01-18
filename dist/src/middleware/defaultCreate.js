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
exports.defaultCreates = void 0;
const controller_1 = require("../services/brand/controller");
const controller_2 = require("../services/product/controller");
const controller_3 = require("../services/question/controller");
const controller_4 = require("../services/retail-chain/controller");
const controller_5 = require("../services/skus/controller");
const controller_6 = require("../services/store-format/controller");
const controller_7 = require("../services/store/controller");
const controller_8 = require("../services/survey-question/controller");
const controller_9 = require("../services/survey/controller");
const controller_10 = require("../services/user/controller");
const controller_11 = require("../services/visit/controller");
const defaultCreates = () => __awaiter(void 0, void 0, void 0, function* () {
    const v1 = yield (0, controller_10.createDefaultUsers)();
    const v2 = yield (0, controller_1.createDefaultBrands)();
    const v3 = yield (0, controller_2.createDefaultProducts)();
    const v4 = yield (0, controller_3.createDefaultQuestions)();
    const v5 = yield (0, controller_4.createDefaultRetailChain)();
    const v6 = yield (0, controller_5.createDefaultSKUS)();
    const v7 = yield (0, controller_6.createDefaultStoreFormat)();
    const v8 = yield (0, controller_7.createDefaultStores)();
    const v10 = yield (0, controller_9.createDefaultSurveys)();
    const v9 = yield (0, controller_11.createDefaultVisits)();
    const v11 = yield (0, controller_8.createDefaultSurveyQuestions)();
});
exports.defaultCreates = defaultCreates;
//# sourceMappingURL=defaultCreate.js.map
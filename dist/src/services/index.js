"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./user/routes"));
const routes_2 = __importDefault(require("./common/routes"));
const routes_3 = __importDefault(require("./brand/routes"));
const routes_4 = __importDefault(require("./product/routes"));
const routes_5 = __importDefault(require("./retail-chain/routes"));
const routes_6 = __importDefault(require("./skus/routes"));
const routes_7 = __importDefault(require("./store/routes"));
const routes_8 = __importDefault(require("./store-format/routes"));
const routes_9 = __importDefault(require("./survey/routes"));
const routes_10 = __importDefault(require("./visit/routes"));
const routes_11 = __importDefault(require("./question/routes"));
const routes_12 = __importDefault(require("./survey-question/routes"));
const routes_13 = __importDefault(require("./survey-submission/routes"));
exports.default = [
    ...routes_1.default,
    ...routes_2.default,
    ...routes_3.default,
    ...routes_4.default,
    ...routes_5.default,
    ...routes_6.default,
    ...routes_7.default,
    ...routes_8.default,
    ...routes_9.default,
    ...routes_10.default,
    ...routes_11.default,
    ...routes_12.default,
    ...routes_13.default,
];
//# sourceMappingURL=index.js.map
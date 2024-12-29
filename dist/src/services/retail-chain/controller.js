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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRetailChainById = exports.updateRetailChainById = exports.getRetailChainById = exports.findAllRetailChain = exports.createRetailChain = void 0;
const models_1 = __importDefault(require("../../models"));
const retail_chain_model_1 = __importDefault(require("../../models/retail-chain.model"));
const Op = models_1.default.Sequelize.Op;
const createRetailChain = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { retailChain } = req.body;
        const checkBrand = yield retail_chain_model_1.default.findOne({
            where: {
                retailChain
            }
        });
        if (checkBrand) {
            return "Retail Chain already exists";
        }
        const brand = {
            retailChain
        };
        const data = yield retail_chain_model_1.default.create(brand);
        yield data.save();
        if (data) {
            const dataValue = yield retail_chain_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.retailChainId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createRetailChain = createRetailChain;
const findAllRetailChain = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { retailChain: { [Op.like]: `%${search}%` } } : null;
        const data = yield retail_chain_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllRetailChain = findAllRetailChain;
const getRetailChainById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield retail_chain_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Retail chain not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getRetailChainById = getRetailChainById;
const updateRetailChainById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { retailChain } = req.body;
        let payload = {
            retailChain
        };
        const num = yield retail_chain_model_1.default.update(payload, {
            where: { retailChainId: id }
        });
        if (num == 1) {
            const data = yield retail_chain_model_1.default.findByPk(id);
            return {
                message: "Retail Chain updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateRetailChainById = updateRetailChainById;
const deleteRetailChainById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield retail_chain_model_1.default.destroy({
            where: { retailChainId: id }
        });
        if (num == 1) {
            return {
                message: "Retail Chain is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Retail Chain with id=${id}. Maybe Retail Chain was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteRetailChainById = deleteRetailChainById;
//# sourceMappingURL=controller.js.map
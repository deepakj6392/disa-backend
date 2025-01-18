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
exports.createDefaultSKUS = exports.deleteSKUById = exports.updateSKUById = exports.getSKUById = exports.findAllSKUs = exports.createSKU = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const product_model_1 = __importDefault(require("../../models/product.model"));
const sku_model_1 = __importDefault(require("./../../models/sku.model"));
const Op = models_1.default.Sequelize.Op;
const createSKU = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skuName, productId, skuGrammage, skuFullName, skuImage } = req.body;
        const checkBrand = yield sku_model_1.default.findOne({
            where: {
                skuName, productId
            }
        });
        if (checkBrand) {
            return "SKU already exists";
        }
        const brand = {
            skuName, productId, skuGrammage, skuFullName, skuImage
        };
        const data = yield sku_model_1.default.create(brand);
        yield data.save();
        if (data) {
            const dataValue = yield sku_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.skuId, { include: [product_model_1.default] });
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createSKU = createSKU;
const findAllSKUs = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { skuName: { [Op.like]: `%${search}%` } } : null;
        const data = yield sku_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllSKUs = findAllSKUs;
const getSKUById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield sku_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "SKU not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getSKUById = getSKUById;
const updateSKUById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { skuName, productId, skuGrammage, skuFullName, skuImage } = req.body;
        let payload = {
            skuName, productId, skuGrammage, skuFullName, skuImage
        };
        const num = yield sku_model_1.default.update(payload, {
            where: { skuId: id }
        });
        if (num == 1) {
            const data = yield sku_model_1.default.findByPk(id);
            return {
                message: "SKU updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateSKUById = updateSKUById;
const deleteSKUById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield sku_model_1.default.destroy({
            where: { skuId: id }
        });
        if (num == 1) {
            return {
                message: "SKU is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete SKU with id=${id}. Maybe SKU was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSKUById = deleteSKUById;
const createDefaultSKUS = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sku = yield sku_model_1.default.findOne({ where: { skuId: 1 } });
        if (!sku) {
            yield sku_model_1.default.bulkCreate(default_1.DEFAULT_SKUS);
            console.log("Default skus created successfully!");
        }
    }
    catch (error) {
        console.log(`default skus create failed: ${error}`);
    }
});
exports.createDefaultSKUS = createDefaultSKUS;
//# sourceMappingURL=controller.js.map
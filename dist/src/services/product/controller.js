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
exports.createDefaultProducts = exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.findAllProducts = exports.createProduct = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const product_model_1 = __importDefault(require("../../models/product.model"));
const Op = models_1.default.Sequelize.Op;
const createProduct = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, productCategory } = req.body;
        const checkBrand = yield product_model_1.default.findOne({
            where: {
                productName
            }
        });
        if (checkBrand) {
            return "Product already exists";
        }
        const brand = {
            productName,
            productCategory
        };
        const data = yield product_model_1.default.create(brand);
        yield data.save();
        if (data) {
            const dataValue = yield product_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.productId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
const findAllProducts = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { productName: { [Op.like]: `%${search}%` } } : null;
        const data = yield product_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllProducts = findAllProducts;
const getProductById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield product_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Product not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getProductById = getProductById;
const updateProductById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { productName, productCategory } = req.body;
        let payload = {
            productName,
            productCategory
        };
        const num = yield product_model_1.default.update(payload, {
            where: { productId: id }
        });
        if (num == 1) {
            const data = yield product_model_1.default.findByPk(id);
            return {
                message: "Product updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateProductById = updateProductById;
const deleteProductById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield product_model_1.default.destroy({
            where: { productId: id }
        });
        if (num == 1) {
            return {
                message: "Product is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProductById = deleteProductById;
const createDefaultProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findOne({ where: { productId: 1 } });
        if (!product) {
            yield product_model_1.default.bulkCreate(default_1.DEFAULT_PRODUCT);
            console.log("Default products created successfully!");
        }
    }
    catch (error) {
        console.log(`default products create failed: ${error}`);
    }
});
exports.createDefaultProducts = createDefaultProducts;
//# sourceMappingURL=controller.js.map
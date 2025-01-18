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
exports.createDefaultBrands = exports.deleteBrandById = exports.updateBrandById = exports.getBrandById = exports.findAllBrands = exports.createBrand = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const brand_model_1 = __importDefault(require("../../models/brand.model"));
const Op = models_1.default.Sequelize.Op;
const createBrand = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { brandName } = req.body;
        let brandLogo;
        if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) {
            brandLogo = req.files[0].filename;
        }
        const checkBrand = yield brand_model_1.default.findOne({
            where: {
                brandName
            }
        });
        if (checkBrand) {
            return "Brand already exists";
        }
        const brand = {
            brandName, brandLogo
        };
        const data = yield brand_model_1.default.create(brand);
        yield data.save();
        if (data) {
            const dataValue = yield brand_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.brandId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createBrand = createBrand;
const findAllBrands = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { brandName: { [Op.like]: `%${search}%` } } : null;
        const data = yield brand_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllBrands = findAllBrands;
const getBrandById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield brand_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Brand not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getBrandById = getBrandById;
const updateBrandById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const id = req.params.id;
        const { brandName } = req.body;
        let payload = {
            brandName
        };
        if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) {
            payload.brandLogo = (_b = req.files[0]) === null || _b === void 0 ? void 0 : _b.filename;
        }
        const num = yield brand_model_1.default.update(payload, {
            where: { brandId: id }
        });
        if (num == 1) {
            const data = yield brand_model_1.default.findByPk(id);
            return {
                message: "Brand updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateBrandById = updateBrandById;
const deleteBrandById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield brand_model_1.default.destroy({
            where: { brandId: id }
        });
        if (num == 1) {
            return {
                message: "Brand is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBrandById = deleteBrandById;
const createDefaultBrands = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brand = yield brand_model_1.default.findOne({ where: { brandId: 1 } });
        if (!brand) {
            yield brand_model_1.default.bulkCreate(default_1.DEFAULT_BRAND);
            console.log("Default brands created successfully!");
        }
    }
    catch (error) {
        console.log(`default brands create failed: ${error}`);
    }
});
exports.createDefaultBrands = createDefaultBrands;
//# sourceMappingURL=controller.js.map
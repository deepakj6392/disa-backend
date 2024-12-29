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
exports.deleteStoreFormatById = exports.updateStoreFormatById = exports.getstoreFormatById = exports.findAllStoreFormat = exports.createStoreFormat = void 0;
const models_1 = __importDefault(require("../../models"));
const store_format_model_1 = __importDefault(require("../../models/store-format.model"));
const Op = models_1.default.Sequelize.Op;
const createStoreFormat = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { storeFormat } = req.body;
        const checkSF = yield store_format_model_1.default.findOne({
            where: {
                storeFormat
            }
        });
        if (checkSF) {
            return "Store Format already exists";
        }
        const storeF = {
            storeFormat
        };
        const data = yield store_format_model_1.default.create(storeF);
        yield data.save();
        if (data) {
            const dataValue = yield store_format_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.storeFormatId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createStoreFormat = createStoreFormat;
const findAllStoreFormat = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { storeFormat: { [Op.like]: `%${search}%` } } : null;
        const data = yield store_format_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllStoreFormat = findAllStoreFormat;
const getstoreFormatById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield store_format_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Store format not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getstoreFormatById = getstoreFormatById;
const updateStoreFormatById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { storeFormat } = req.body;
        let payload = {
            storeFormat
        };
        const num = yield store_format_model_1.default.update(payload, {
            where: { storeFormatId: id }
        });
        if (num == 1) {
            const data = yield store_format_model_1.default.findByPk(id);
            return {
                message: "Store format updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateStoreFormatById = updateStoreFormatById;
const deleteStoreFormatById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield store_format_model_1.default.destroy({
            where: { storeFormatId: id }
        });
        if (num == 1) {
            return {
                message: "Store format is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Store format with id=${id}. Maybe Store format was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteStoreFormatById = deleteStoreFormatById;
//# sourceMappingURL=controller.js.map
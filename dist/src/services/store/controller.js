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
exports.createDefaultStores = exports.deleteStoreById = exports.updateStoreById = exports.getStoreById = exports.findAllStores = exports.createStore = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const store_model_1 = __importDefault(require("./../../models/store.model"));
const Op = models_1.default.Sequelize.Op;
const createStore = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType, storeAddress, storeLocation } = req.body;
        const checkBrand = yield store_model_1.default.findOne({
            where: {
                storeName
            }
        });
        if (checkBrand) {
            return "Store already exists";
        }
        const store = {
            storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType, storeAddress, storeLocation
        };
        const data = yield store_model_1.default.create(store);
        yield data.save();
        console.log(data);
        if (data) {
            const dataValue = yield store_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.storeId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createStore = createStore;
const findAllStores = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { storeName: { [Op.like]: `%${search}%` } } : null;
        const data = yield store_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllStores = findAllStores;
const getStoreById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield store_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Store not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getStoreById = getStoreById;
const updateStoreById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType, storeAddress, storeLocation } = req.body;
        let payload = {
            storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType, storeAddress, storeLocation
        };
        const num = yield store_model_1.default.update(payload, {
            where: { storeId: id }
        });
        if (num == 1) {
            const data = yield store_model_1.default.findByPk(id);
            return {
                message: "Store updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateStoreById = updateStoreById;
const deleteStoreById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield store_model_1.default.destroy({
            where: { storeId: id }
        });
        if (num == 1) {
            return {
                message: "Store is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Store with id=${id}. Maybe Store was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteStoreById = deleteStoreById;
const createDefaultStores = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const store = yield store_model_1.default.findOne({ where: { storeId: 1 } });
        if (!store) {
            yield store_model_1.default.bulkCreate(default_1.DEFAULT_STORES);
            console.log("Default stores created successfully!");
        }
    }
    catch (error) {
        console.log(`default stores create failed: ${error}`);
    }
});
exports.createDefaultStores = createDefaultStores;
//# sourceMappingURL=controller.js.map
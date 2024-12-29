"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const retail_chain_model_1 = __importDefault(require("./retail-chain.model"));
const store_format_model_1 = __importDefault(require("./store-format.model"));
const { sequelize, Sequelize } = _1.default;
const Store = sequelize.define("store", {
    storeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    storeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storePriority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storeFormatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'store-formats',
            key: 'storeFormatId',
        },
    },
    storeArea: {
        type: Sequelize.STRING,
        allowNull: false
    },
    retailChainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'retail-chains',
            key: 'retailChainId',
        },
    },
    storeType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storeAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storeLocation: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['storeName']
        }
    ]
});
Store.belongsTo(store_format_model_1.default, { foreignKey: 'storeFormatId' });
Store.belongsTo(retail_chain_model_1.default, { foreignKey: 'retailChainId' });
exports.default = Store;
//# sourceMappingURL=store.model.js.map
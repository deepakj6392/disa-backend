"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const product_model_1 = __importDefault(require("./product.model"));
const { sequelize, Sequelize } = _1.default;
const SkuModel = sequelize.define("sku", {
    skuId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'productId',
        },
    },
    skuName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    skuGrammage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    skuFullName: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
    skuImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    skuCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: false,
            fields: ['skuName']
        }
    ]
});
SkuModel.belongsTo(product_model_1.default, { foreignKey: 'productId' });
exports.default = SkuModel;
//# sourceMappingURL=sku.model.js.map
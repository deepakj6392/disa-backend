"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { sequelize, Sequelize } = _1.default;
const Product = sequelize.define("product", {
    productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['productName']
        }
    ]
});
exports.default = Product;
//# sourceMappingURL=product.model.js.map
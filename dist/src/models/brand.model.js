"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { sequelize, Sequelize } = _1.default;
const Brand = sequelize.define("brand", {
    brandId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brandName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brandLogo: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['brandName']
        }
    ]
});
exports.default = Brand;
//# sourceMappingURL=brand.model.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { sequelize, Sequelize } = _1.default;
const StoreFormat = sequelize.define("store-format", {
    storeFormatId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    storeFormat: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['storeFormat']
        }
    ]
});
exports.default = StoreFormat;
//# sourceMappingURL=store-format.model.js.map
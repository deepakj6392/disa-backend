"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { sequelize, Sequelize } = _1.default;
const RetailChain = sequelize.define("retail-chain", {
    retailChainId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    retailChain: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['retailChain']
        }
    ]
});
exports.default = RetailChain;
//# sourceMappingURL=retail-chain.model.js.map
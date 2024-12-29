"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { sequelize, Sequelize } = _1.default;
const QuestionMaster = sequelize.define("question-master", {
    questionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    questionCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    questionSubCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    questionChildCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longQuestion: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    shortQuestion: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
    },
    screenType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usedForDeviation: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    skuSpecific: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storeDisplayLocation: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    indexes: [
        {
            fields: ['longQuestion', 'shortQuestion']
        }
    ]
});
exports.default = QuestionMaster;
//# sourceMappingURL=question-master.model.js.map
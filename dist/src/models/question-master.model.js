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
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    questionHint: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
    },
    screenType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responseType: {
        type: Sequelize.STRING,
        defaultValue: "number"
    },
    usedForDeviation: {
        type: Sequelize.STRING,
        defaultValue: "no"
    },
    skuSpecific: {
        type: Sequelize.STRING,
        defaultValue: "no"
    },
    storeDisplayLocation: {
        type: Sequelize.STRING,
        defaultValue: "primary"
    }
}, {
    indexes: [
        {
            fields: ['description']
        }
    ]
});
exports.default = QuestionMaster;
//# sourceMappingURL=question-master.model.js.map
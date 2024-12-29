"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const brand_model_1 = __importDefault(require("./brand.model"));
const { sequelize, Sequelize } = _1.default;
const Survey = sequelize.define("survey", {
    surveyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    surveyBrandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'brands',
            key: 'brandId',
        },
    },
    surveyStartDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    surveyEndDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    indexes: []
});
Survey.belongsTo(brand_model_1.default, { foreignKey: 'surveyBrandId' });
exports.default = Survey;
//# sourceMappingURL=survey.model.js.map
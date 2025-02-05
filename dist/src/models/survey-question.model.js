"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const brand_model_1 = __importDefault(require("./brand.model"));
const product_model_1 = __importDefault(require("./product.model"));
const question_master_model_1 = __importDefault(require("./question-master.model"));
const sku_model_1 = __importDefault(require("./sku.model"));
const visit_model_1 = __importDefault(require("./visit.model"));
const { sequelize, Sequelize } = _1.default;
const SurveyQuestion = sequelize.define("survey-question", {
    surveyQuestionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'question-masters',
            key: 'questionId',
        },
    },
    brandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'brands',
            key: 'brandId',
        },
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'productId',
        },
    },
    skuId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'skus',
            key: 'skuId',
        },
    },
    visitId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'visits',
            key: 'visitId',
        },
    },
    expectedResponse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surveyorResponse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    baseScore: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    referenceImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    surveyorImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    skipToSurveyQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    relatedSurveyQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    startTime: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    endTime: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    indexes: [
        {
            fields: ['expectedResponse']
        }
    ]
});
SurveyQuestion.belongsTo(question_master_model_1.default, { foreignKey: 'questionId' });
SurveyQuestion.belongsTo(brand_model_1.default, { foreignKey: 'brandId' });
SurveyQuestion.belongsTo(product_model_1.default, { foreignKey: 'productId' });
SurveyQuestion.belongsTo(sku_model_1.default, { foreignKey: 'skuId' });
SurveyQuestion.belongsTo(visit_model_1.default, { foreignKey: 'visitId' });
exports.default = SurveyQuestion;
//# sourceMappingURL=survey-question.model.js.map
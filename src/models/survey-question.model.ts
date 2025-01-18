import db from ".";
import Brand from "./brand.model";
import Product from "./product.model";
import QuestionMaster from "./question-master.model";
import SkuModel from "./sku.model";
import Visit from "./visit.model";

const { sequelize, Sequelize } = db;

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
}, {
  indexes: [
    {
      fields: ['expectedResponse']
    }
  ]
});


SurveyQuestion.belongsTo(QuestionMaster, { foreignKey: 'questionId' });
SurveyQuestion.belongsTo(Brand, { foreignKey: 'brandId' });
SurveyQuestion.belongsTo(Product, { foreignKey: 'productId' });
SurveyQuestion.belongsTo(SkuModel, { foreignKey: 'skuId' });
SurveyQuestion.belongsTo(Visit, { foreignKey: 'visitId' });


export default SurveyQuestion;

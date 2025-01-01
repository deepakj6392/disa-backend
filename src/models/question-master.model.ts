import db from ".";

const { sequelize, Sequelize } = db;

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
    defaultValue:'',
  },
  screenType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  responseType: {
    type: Sequelize.String,
    defaultValue: "number"
  },
  usedForDeviation:{
    type: Sequelize.String,
    defaultValue: "no"
  },
  skuSpecific:{
    type: Sequelize.String,
    defaultValue: "no"
  },
  storeDisplayLocation:{
    type: Sequelize.String,
    defaultValue: "primary"
  }
}, {
  indexes: [
    {
      fields: ['description']
    }
  ]
});
export default QuestionMaster;

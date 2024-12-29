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
  longQuestion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  shortQuestion: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue:'',
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
      fields: ['longQuestion','shortQuestion']
    }
  ]
});
export default QuestionMaster;

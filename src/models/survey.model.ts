import db from ".";
import Brand from "./brand.model";

const { sequelize, Sequelize } = db;

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


Survey.belongsTo(Brand, { foreignKey: 'surveyBrandId' });


export default Survey;

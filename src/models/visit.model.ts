import db from ".";
import Store from "./store.model";
import Survey from "./survey.model";
import User from "./user.model";

const { sequelize, Sequelize } = db;

const Visit = sequelize.define("visit", {
  visitId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  visitDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  surveyId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'surveys',
      key: 'surveyId',
    },
  },
  surveyorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'userId',
    },
  },
  storeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'stores',
      key: 'storeId',
    },
  },

}, {
  indexes: [
    {
      fields: ['visitDate']
    }
  ]
});

Visit.belongsTo(Survey, { foreignKey: 'surveyId' });
Visit.belongsTo(User, { foreignKey: 'surveyorId' });
Visit.belongsTo(Store, { foreignKey: 'storeId' });

export default Visit;

import db from ".";

const { sequelize, Sequelize } = db;

const StoreFormat = sequelize.define("store-format", {
  storeFormatId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  storeFormat: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['storeFormat']
    }
  ]
});
export default StoreFormat;

import db from ".";

const { sequelize, Sequelize } = db;

const RetailChain = sequelize.define("retail-chain", {
  retailChainId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  retailChain: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['retailChain']
    }
  ]
});
export default RetailChain;

import db from ".";
import RetailChain from "./retail-chain.model";
import StoreFormat from "./store-format.model";

const { sequelize, Sequelize } = db;

const Store = sequelize.define("store", {
  storeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  storeName: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  storePriority: {
    type: Sequelize.STRING,
    allowNull: false
  },
  storeFormatId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'store-formats',
      key: 'storeFormatId',
    },
  },
  storeArea: {
    type: Sequelize.STRING,
    allowNull: false
  },
  retailChainId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'retail-chains',
      key: 'retailChainId',
    },
  },
  storeType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  storeAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  storeLocation: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['storeName']
    }
  ]
});

Store.belongsTo(StoreFormat, { foreignKey: 'storeFormatId' });
Store.belongsTo(RetailChain, { foreignKey: 'retailChainId' });

export default Store;

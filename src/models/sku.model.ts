
import database from '.';
import Product from './product.model';
const { sequelize, Sequelize } = database;

const SkuModel = sequelize.define("sku", {
  skuId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'productId',
    },
  },
  skuName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  skuGrammage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  skuFullName: {
    type: Sequelize.STRING,
    defaultValue:'',
  },
  skuImage: {
    type: Sequelize.STRING,
    allowNull: false
  },
  skuCategory: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  indexes: [
    {
      unique: false,
      fields: ['skuName']
    }
  ]
});

SkuModel.belongsTo(Product, { foreignKey: 'productId' });

export default SkuModel;

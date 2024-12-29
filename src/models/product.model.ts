import db from ".";
const { sequelize, Sequelize } = db;

const Product = sequelize.define("product", {
  productId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['productName']
    }
  ]
});


export default Product;

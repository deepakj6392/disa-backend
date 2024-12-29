import db from ".";

const { sequelize, Sequelize } = db;

const Brand = sequelize.define("brand", {
  brandId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brandName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brandLogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['brandName']
    }
  ]
});
export default Brand;

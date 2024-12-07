import db from ".";

const { sequelize, Sequelize } = db;

const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      isEmail: true
    }
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  countryCode: {
    type: Sequelize.STRING,
    defaultValue:'',
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  isAdmin:{
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ]
});
export default User;

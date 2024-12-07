import { CONSTANTS } from "../../config/config";

const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONSTANTS.DB, CONSTANTS.USER, CONSTANTS.PASSWORD, {
  host: CONSTANTS.HOST,
  dialect: CONSTANTS.dialect,
  // operatorsAliases: false,
  // port:CONSTANTS.PORT,
  pool: {
    max: CONSTANTS.pool.max,
    min: CONSTANTS.pool.min,
    acquire: CONSTANTS.pool.acquire,
    idle: CONSTANTS.pool.idle
  }
});

const db:any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default {
    db,
    sequelize,
    Sequelize
}
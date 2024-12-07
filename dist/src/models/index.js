"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config_1.CONSTANTS.DB, config_1.CONSTANTS.USER, config_1.CONSTANTS.PASSWORD, {
    host: config_1.CONSTANTS.HOST,
    dialect: config_1.CONSTANTS.dialect,
    // operatorsAliases: false,
    // port:CONSTANTS.PORT,
    pool: {
        max: config_1.CONSTANTS.pool.max,
        min: config_1.CONSTANTS.pool.min,
        acquire: config_1.CONSTANTS.pool.acquire,
        idle: config_1.CONSTANTS.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
exports.default = {
    db,
    sequelize,
    Sequelize
};
//# sourceMappingURL=index.js.map
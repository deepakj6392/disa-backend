"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../../config/configuration");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(configuration_1.CONSTANTS.DB, configuration_1.CONSTANTS.USER, configuration_1.CONSTANTS.PASSWORD, {
    host: configuration_1.CONSTANTS.HOST,
    dialect: configuration_1.CONSTANTS.dialect,
    // operatorsAliases: false,
    // port:CONSTANTS.PORT,
    pool: {
        max: configuration_1.CONSTANTS.pool.max,
        min: configuration_1.CONSTANTS.pool.min,
        acquire: configuration_1.CONSTANTS.pool.acquire,
        idle: configuration_1.CONSTANTS.pool.idle
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
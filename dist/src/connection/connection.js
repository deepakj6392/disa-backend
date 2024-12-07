"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../models/index"));
// In development, you may need to drop existing tables and re-sync
// database. Just use force: true as following code: {force:true} in sync
const resync = process.env.RESYNC;
const syncDB = resync == 0 ? true : false;
index_1.default.sequelize.sync({ force: syncDB })
    .then(() => {
    console.log("Synced db.");
})
    .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
//# sourceMappingURL=connection.js.map
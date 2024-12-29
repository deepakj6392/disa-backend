"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const store_model_1 = __importDefault(require("./store.model"));
const survey_model_1 = __importDefault(require("./survey.model"));
const user_model_1 = __importDefault(require("./user.model"));
const { sequelize, Sequelize } = _1.default;
const Visit = sequelize.define("visit", {
    visitId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    visitDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    surveyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'surveys',
            key: 'surveyId',
        },
    },
    surveyorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'userId',
        },
    },
    storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'stores',
            key: 'storeId',
        },
    },
}, {
    indexes: [
        {
            fields: ['visitDate']
        }
    ]
});
Visit.belongsTo(survey_model_1.default, { foreignKey: 'surveyId' });
Visit.belongsTo(user_model_1.default, { foreignKey: 'surveyorId' });
Visit.belongsTo(store_model_1.default, { foreignKey: 'storeId' });
exports.default = Visit;
//# sourceMappingURL=visit.model.js.map
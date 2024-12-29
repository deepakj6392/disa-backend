"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyAnswer = exports.SurveySubmission = void 0;
const _1 = __importDefault(require("."));
const survey_question_model_1 = __importDefault(require("./survey-question.model"));
const user_model_1 = __importDefault(require("./user.model"));
const { sequelize, Sequelize } = _1.default;
// SurveySubmission model
const SurveySubmission = sequelize.define("survey-submission", {
    surveySubmissionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    surveyorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "userId",
        },
    },
}, {
    indexes: [
        {
            fields: ["surveyorId"],
        },
    ],
});
exports.SurveySubmission = SurveySubmission;
// SurveyAnswer model
const SurveyAnswer = sequelize.define("survey-answer", {
    surveyAnswerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    surveySubmissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "survey-submissions",
            key: "surveySubmissionId",
        },
    },
    surveyQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "survey-questions",
            key: "surveyQuestionId",
        },
    },
    answer: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: {},
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    time: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    file: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});
exports.SurveyAnswer = SurveyAnswer;
// Associations
SurveySubmission.belongsTo(user_model_1.default, { foreignKey: "surveyorId" });
SurveyAnswer.belongsTo(SurveySubmission, { foreignKey: "surveySubmissionId" });
SurveyAnswer.belongsTo(survey_question_model_1.default, { foreignKey: "surveyQuestionId" });
//# sourceMappingURL=survey-submission.model.js.map
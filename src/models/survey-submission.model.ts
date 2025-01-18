import db from ".";
import SurveyQuestion from "./survey-question.model";
import User from "./user.model";

const { sequelize, Sequelize } = db;

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


// Associations
SurveySubmission.hasMany(SurveyAnswer, { foreignKey: 'surveySubmissionId' });
SurveySubmission.belongsTo(User, { foreignKey: "surveyorId" });
SurveyAnswer.belongsTo(SurveySubmission, { foreignKey: "surveySubmissionId" });
SurveyAnswer.belongsTo(SurveyQuestion, { foreignKey: "surveyQuestionId" });

export { SurveySubmission, SurveyAnswer };

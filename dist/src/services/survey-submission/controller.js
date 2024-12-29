"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSurveySubmissionById = exports.getSurveySubmissionById = exports.findAllSurveySubmissionByUser = exports.findAllSurveySubmissions = exports.createSurveySubmission = void 0;
const models_1 = __importDefault(require("../../models"));
const survey_submission_model_1 = require("../../models/survey-submission.model");
const user_model_1 = __importDefault(require("../../models/user.model"));
const Op = models_1.default.Sequelize.Op;
const createSurveySubmission = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { surveyorId, answers } = req.body;
        let validateUser = yield user_model_1.default.findByPk(surveyorId);
        if (!validateUser) {
            return "User not exist";
        }
        const submission = yield survey_submission_model_1.SurveySubmission.create({ surveyorId });
        const formattedAnswers = answers.map((answer) => (Object.assign({ surveySubmissionId: submission.surveySubmissionId }, answer)));
        yield survey_submission_model_1.SurveyAnswer.bulkCreate(formattedAnswers);
        return submission;
    }
    catch (error) {
        next(error);
    }
});
exports.createSurveySubmission = createSurveySubmission;
const findAllSurveySubmissions = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield survey_submission_model_1.SurveySubmission.findAll({});
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllSurveySubmissions = findAllSurveySubmissions;
const findAllSurveySubmissionByUser = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield survey_submission_model_1.SurveySubmission.findAll({ where: { surveyorId: req.params.id } });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllSurveySubmissionByUser = findAllSurveySubmissionByUser;
const getSurveySubmissionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield survey_submission_model_1.SurveySubmission.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Survey Submission not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getSurveySubmissionById = getSurveySubmissionById;
const deleteSurveySubmissionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield survey_submission_model_1.SurveySubmission.destroy({
            where: { surveySubmissionId: id }
        });
        if (num == 1) {
            return {
                message: "Survey is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSurveySubmissionById = deleteSurveySubmissionById;
//# sourceMappingURL=controller.js.map
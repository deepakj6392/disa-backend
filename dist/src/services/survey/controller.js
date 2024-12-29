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
exports.deleteSurveyById = exports.updateSurveyById = exports.getSurveyById = exports.findAllSurveys = exports.createSurvey = void 0;
const models_1 = __importDefault(require("../../models"));
const brand_model_1 = __importDefault(require("../../models/brand.model"));
const survey_model_1 = __importDefault(require("./../../models/survey.model"));
const Op = models_1.default.Sequelize.Op;
const createSurvey = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { surveyBrandId, surveyStartDate, surveyEndDate } = req.body;
        const survey = {
            surveyBrandId, surveyStartDate, surveyEndDate
        };
        const data = yield survey_model_1.default.create(survey);
        yield data.save();
        if (data) {
            const dataValue = yield survey_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.surveyId, {
                include: [brand_model_1.default]
            });
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createSurvey = createSurvey;
const findAllSurveys = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { surveyBrandId: { [Op.like]: `%${search}%` } } : null;
        const data = yield survey_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllSurveys = findAllSurveys;
const getSurveyById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield survey_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Survey not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getSurveyById = getSurveyById;
const updateSurveyById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { surveyBrandId, surveyStartDate, surveyEndDate } = req.body;
        let payload = {
            surveyBrandId, surveyStartDate, surveyEndDate
        };
        const num = yield survey_model_1.default.update(payload, {
            where: { surveyId: id }
        });
        if (num == 1) {
            const data = yield survey_model_1.default.findByPk(id);
            return {
                message: "Survey updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateSurveyById = updateSurveyById;
const deleteSurveyById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield survey_model_1.default.destroy({
            where: { surveyId: id }
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
exports.deleteSurveyById = deleteSurveyById;
//# sourceMappingURL=controller.js.map
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
exports.createDefaultSurveyQuestions = exports.deleteSurveyQuestionById = exports.updateSurveyQuestionById = exports.getSurveyQuestionById = exports.findAllSurveyQuestions = exports.createSurveyQuestion = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const brand_model_1 = __importDefault(require("../../models/brand.model"));
const product_model_1 = __importDefault(require("../../models/product.model"));
const question_master_model_1 = __importDefault(require("../../models/question-master.model"));
const sku_model_1 = __importDefault(require("../../models/sku.model"));
const survey_question_model_1 = __importDefault(require("../../models/survey-question.model"));
const visit_model_1 = __importDefault(require("../../models/visit.model"));
const Op = models_1.default.Sequelize.Op;
const createSurveyQuestion = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { questionId, brandId, productId, skuId, visitId, expectedResponse, surveyorResponse, baseScore } = req.body;
        let validateQuestion = yield question_master_model_1.default.findByPk(questionId);
        if (!validateQuestion) {
            return "Question not exist";
        }
        let validateBrand = yield brand_model_1.default.findByPk(brandId);
        if (!validateBrand) {
            return "Brand not exist";
        }
        let validateProduct = yield product_model_1.default.findByPk(productId);
        if (!validateProduct) {
            return "Product not exist";
        }
        let validateSKU = yield sku_model_1.default.findByPk(skuId);
        if (!validateSKU) {
            return "SKU not exist";
        }
        let validateVisit = yield visit_model_1.default.findByPk(visitId);
        if (!validateVisit) {
            return "Visit not exist";
        }
        let referenceImage, surveyorImage;
        if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) {
            for (let file of req.files) {
                if (file.fieldname === 'referenceImage') {
                    referenceImage = file.filename;
                }
                else if (file.fieldname === 'surveyorImage') {
                    surveyorImage = file.filename;
                }
            }
        }
        const survey = {
            questionId, brandId, productId, skuId, visitId, expectedResponse,
            surveyorResponse, baseScore, referenceImage, surveyorImage
        };
        const data = yield survey_question_model_1.default.create(survey);
        yield data.save();
        if (data) {
            const dataValue = yield survey_question_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.surveyQuestionId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createSurveyQuestion = createSurveyQuestion;
const findAllSurveyQuestions = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { questionId: { [Op.like]: `%${search}%` } } : null;
        const data = yield survey_question_model_1.default.findAll({ where: condition, include: [question_master_model_1.default, sku_model_1.default, visit_model_1.default, brand_model_1.default, product_model_1.default] });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllSurveyQuestions = findAllSurveyQuestions;
const getSurveyQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield survey_question_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Survey Question not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getSurveyQuestionById = getSurveyQuestionById;
const updateSurveyQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        const { questionId, brandId, productId, skuId, visitId, expectedResponse, surveyorResponse, baseScore } = req.body;
        let referenceImage, surveyorImage;
        if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) {
            for (let file of req.files) {
                if (file.fieldname === 'referenceImage') {
                    referenceImage = file.filename;
                }
                else if (file.fieldname === 'surveyorImage') {
                    surveyorImage = file.filename;
                }
            }
        }
        let payload = {
            questionId, brandId, productId, skuId, visitId, expectedResponse,
            surveyorResponse, baseScore, referenceImage, surveyorImage
        };
        const num = yield survey_question_model_1.default.update(payload, {
            where: { productId: id }
        });
        if (num == 1) {
            const data = yield survey_question_model_1.default.findByPk(id);
            return {
                message: "Survey question updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateSurveyQuestionById = updateSurveyQuestionById;
const deleteSurveyQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield survey_question_model_1.default.destroy({
            where: { surveyQuestionId: id }
        });
        if (num == 1) {
            return {
                message: "Survey question is deleted successfully!"
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
exports.deleteSurveyQuestionById = deleteSurveyQuestionById;
const createDefaultSurveyQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const survey = yield survey_question_model_1.default.findOne({ where: { surveyQuestionId: 1 } });
        if (!survey) {
            yield survey_question_model_1.default.bulkCreate(default_1.DEFAULT_SURVEY_QUESTIONS);
            console.log("Default survey questions created successfully!");
        }
    }
    catch (error) {
        console.log(`default survey questions create failed: ${error}`);
    }
});
exports.createDefaultSurveyQuestions = createDefaultSurveyQuestions;
//# sourceMappingURL=controller.js.map
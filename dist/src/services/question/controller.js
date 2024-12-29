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
exports.createDefaultQuestions = exports.deleteQuestionById = exports.updateQuestionById = exports.getQuestionById = exports.findAllQuestions = exports.createQuestion = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const question_master_model_1 = __importDefault(require("../../models/question-master.model"));
const Op = models_1.default.Sequelize.Op;
const createQuestion = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionCategory, questionSubCategory, questionChildCategory, longQuestion, shortQuestion, screenType, usedForDeviation, skuSpecific, storeDisplayLocation } = req.body;
        const survey = {
            questionCategory, questionSubCategory, questionChildCategory,
            longQuestion, shortQuestion, screenType, usedForDeviation, skuSpecific,
            storeDisplayLocation
        };
        const data = yield question_master_model_1.default.create(survey);
        yield data.save();
        if (data) {
            const dataValue = yield question_master_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.questionId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createQuestion = createQuestion;
const findAllQuestions = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { shortQuestion: { [Op.like]: `%${search}%` } } : null;
        const data = yield question_master_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllQuestions = findAllQuestions;
const getQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield question_master_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Question not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getQuestionById = getQuestionById;
const updateQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { questionCategory, questionSubCategory, questionChildCategory, longQuestion, shortQuestion, screenType, usedForDeviation, skuSpecific, storeDisplayLocation } = req.body;
        let payload = {
            questionCategory, questionSubCategory, questionChildCategory,
            longQuestion, shortQuestion, screenType, usedForDeviation, skuSpecific,
            storeDisplayLocation
        };
        const num = yield question_master_model_1.default.update(payload, {
            where: { questionId: id }
        });
        if (num == 1) {
            const data = yield question_master_model_1.default.findByPk(id);
            return {
                message: "Question updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateQuestionById = updateQuestionById;
const deleteQuestionById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield question_master_model_1.default.destroy({
            where: { questionId: id }
        });
        if (num == 1) {
            return {
                message: "Question is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteQuestionById = deleteQuestionById;
const createDefaultQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield question_master_model_1.default.findOne({ where: { questionId: 1 } });
        if (!questions) {
            yield question_master_model_1.default.bulkCreate(default_1.DEFAULT_QUESTIONS);
            console.log("Default questions created successfully!");
        }
    }
    catch (error) {
        console.log(`default questions create failed: ${error}`);
    }
});
exports.createDefaultQuestions = createDefaultQuestions;
//# sourceMappingURL=controller.js.map
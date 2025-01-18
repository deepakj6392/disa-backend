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
exports.createDefaultVisits = exports.deleteVisitById = exports.updateVisitById = exports.getVisitById = exports.findAllVisits = exports.createVisit = void 0;
const default_1 = require("../../constants/default");
const models_1 = __importDefault(require("../../models"));
const store_model_1 = __importDefault(require("../../models/store.model"));
const survey_model_1 = __importDefault(require("../../models/survey.model"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const visit_model_1 = __importDefault(require("./../../models/visit.model"));
const Op = models_1.default.Sequelize.Op;
const createVisit = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { visitDate, surveyId, surveyorId, storeId } = req.body;
        let validateStore = yield store_model_1.default.findByPk(storeId);
        if (!validateStore) {
            return "Store not exist";
        }
        let validateSurvey = yield survey_model_1.default.findByPk(surveyId);
        if (!validateSurvey) {
            return "Survey not exist";
        }
        let validateUser = yield user_model_1.default.findByPk(surveyorId);
        if (!validateUser) {
            return "Surveyor not exist";
        }
        const checkBrand = yield visit_model_1.default.findOne({
            where: {
                surveyId, storeId, surveyorId
            }
        });
        if (checkBrand) {
            return "Already visited this store";
        }
        const brand = {
            visitDate, surveyId, surveyorId, storeId
        };
        console.log(brand);
        const data = yield visit_model_1.default.create(brand);
        yield data.save();
        if (data) {
            const dataValue = yield visit_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.visitId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createVisit = createVisit;
const findAllVisits = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        var condition = search ? { visitDate: { [Op.like]: `%${search}%` } } : null;
        const data = yield visit_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllVisits = findAllVisits;
const getVisitById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield visit_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "Visit not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getVisitById = getVisitById;
const updateVisitById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { visitDate, surveyId, surveyorId, storeId } = req.body;
        let payload = {
            visitDate, surveyId, surveyorId, storeId
        };
        const num = yield visit_model_1.default.update(payload, {
            where: { visitId: id }
        });
        if (num == 1) {
            const data = yield visit_model_1.default.findByPk(id);
            return {
                message: "Visit updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateVisitById = updateVisitById;
const deleteVisitById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield visit_model_1.default.destroy({
            where: { visitId: id }
        });
        if (num == 1) {
            return {
                message: "Visit is deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete Visit with id=${id}. Maybe Visit was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteVisitById = deleteVisitById;
const createDefaultVisits = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const visit = yield visit_model_1.default.findOne({ where: { visitId: 1 } });
        if (!visit) {
            yield visit_model_1.default.bulkCreate(default_1.DEFAULT_VISIT);
            console.log("Default visits created successfully!");
        }
    }
    catch (error) {
        console.log(`default visits create failed: ${error}`);
    }
});
exports.createDefaultVisits = createDefaultVisits;
//# sourceMappingURL=controller.js.map
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
exports.createDefaultUsers = exports.deleteById = exports.updateById = exports.getUserById = exports.findAllUsers = exports.loginUser = exports.createUser = void 0;
const constants_1 = require("../../constants");
const models_1 = __importDefault(require("../../models"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const Utilities_1 = require("../../utils/Utilities");
const Op = models_1.default.Sequelize.Op;
const createUser = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, username, mobile } = req.body;
        const checkUser = yield user_model_1.default.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { username }
                ]
            }
        });
        if (checkUser) {
            return "User already exists";
        }
        const hashPass = yield Utilities_1.Utilities.cryptPassword(password);
        const user = {
            firstName, lastName, email, mobile,
            password: hashPass, username, lastLogin: Date.now()
        };
        const data = yield user_model_1.default.create(user);
        yield data.save();
        if (data) {
            const dataValue = yield user_model_1.default.findByPk(data === null || data === void 0 ? void 0 : data.userId);
            return dataValue;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const loginUser = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let data = yield user_model_1.default.findOne({
            where: { username },
        });
        if (!data) {
            return "User not found";
        }
        const isValidPass = yield Utilities_1.Utilities.VerifyPassword(password, data === null || data === void 0 ? void 0 : data.password);
        if (!isValidPass)
            return "Incorrect Password";
        const token = yield Utilities_1.Utilities.createJWTToken({ username, id: data === null || data === void 0 ? void 0 : data.userId, isAdmin: data === null || data === void 0 ? void 0 : data.isAdmin, email: data.email });
        yield user_model_1.default.update({ lastLogin: Date.now() }, {
            where: {
                username
            }
        });
        if (data)
            return { token, data };
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
const findAllUsers = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.query.title;
        var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
        const data = yield user_model_1.default.findAll({ where: condition });
        if (data)
            return data;
    }
    catch (error) {
        next(error);
    }
});
exports.findAllUsers = findAllUsers;
const getUserById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield user_model_1.default.findByPk(id);
        if (data) {
            return data;
        }
        else {
            return "User not found";
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getUserById = getUserById;
const updateById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        const { firstName, lastName, mobile, countryCode } = req.body;
        let payload = {
            firstName, lastName, mobile, countryCode
        };
        if (req.file) {
            payload.avatar = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        }
        const num = yield user_model_1.default.update(payload, {
            where: { userId: id }
        });
        if (num == 1) {
            const data = yield user_model_1.default.findByPk(id);
            return {
                message: "User updated successfully.",
                data
            };
        }
        ;
    }
    catch (error) {
        next(error);
    }
});
exports.updateById = updateById;
const deleteById = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const num = yield user_model_1.default.destroy({
            where: { userId: id }
        });
        if (num == 1) {
            return {
                message: "User was deleted successfully!"
            };
        }
        else {
            return {
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            };
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deleteById = deleteById;
const createDefaultUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_model_1.default.findOne({ where: { userId: 1 } });
        let users = constants_1.ADMIN_USER;
        for (let user of users) {
            user.password = yield Utilities_1.Utilities.cryptPassword(user.password);
            user.lastLogin = Date.now();
        }
        if (!data) {
            users = yield user_model_1.default.bulkCreate(users);
            console.log('default users created');
        }
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
});
exports.createDefaultUsers = createDefaultUsers;
//# sourceMappingURL=controller.js.map
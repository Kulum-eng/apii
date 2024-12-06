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
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//import { createUser, findUserByEmail } from '../../persistencia/repositorios/userRepository';
const UserRepository_1 = require("../../persistencia/repositorios/UserRepository");
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(user.password, 10);
    const newUser = Object.assign(Object.assign({}, user), { password: hashedPassword });
    return yield (0, UserRepository_1.createUser)(newUser);
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, UserRepository_1.findUserByEmail)(email);
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        return jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET || 'defaultSecret', { expiresIn: '1h' });
    }
    return null;
});
exports.loginUser = loginUser;

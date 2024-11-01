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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const db_1 = require("../config/db");
const User_1 = require("../models/User");
class UserRepository {
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db_1.db.execute('SELECT * FROM users WHERE username = ?', [username]);
            return rows.length ? new User_1.User(rows[0].id, rows[0].username, rows[0].password) : null;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db_1.db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password]);
            return new User_1.User(result.insertId, user.username, user.password);
        });
    }
}
exports.UserRepository = UserRepository;

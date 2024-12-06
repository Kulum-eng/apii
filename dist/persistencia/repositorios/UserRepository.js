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
exports.createUser = createUser;
exports.findUserByEmail = findUserByEmail;
const db_1 = __importDefault(require("../config/db"));
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // Modificamos la consulta para incluir `username`
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const values = [user.username, user.email, user.password];
        // Ejecutamos la consulta y obtenemos el `insertId` del nuevo usuario
        const [result] = yield db_1.default.query(query, values); // Utilizamos `as any` para evitar problemas de tipos
        const insertId = result.insertId;
        // Recuperamos el usuario recién creado usando el ID
        const [rows] = yield db_1.default.query('SELECT * FROM users WHERE id = ?', [insertId]);
        return rows[0];
    });
}
function findUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield db_1.default.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows.length > 0 ? rows[0] : null;
    });
}

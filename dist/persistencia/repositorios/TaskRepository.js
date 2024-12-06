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
exports.getTasksByUserId = exports.deleteTask = exports.updateTask = exports.createTask = void 0;
const db_1 = __importDefault(require("../config/db"));
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query('INSERT INTO tasks (userId, title, description, completed) VALUES (?, ?, ?, ?)', [task.userId, task.title, task.description, task.completed]);
    return result;
});
exports.createTask = createTask;
const updateTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?', [task.title, task.description, task.completed, task.id]);
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query('DELETE FROM tasks WHERE id = ?', [id]);
});
exports.deleteTask = deleteTask;
const getTasksByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM tasks WHERE userId = ?', [userId]);
    return rows;
});
exports.getTasksByUserId = getTasksByUserId;

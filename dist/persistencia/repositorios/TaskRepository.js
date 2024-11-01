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
exports.TaskRepository = void 0;
const db_1 = require("../config/db");
const Task_1 = require("../models/Task");
class TaskRepository {
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db_1.db.execute('SELECT * FROM tasks');
            return rows;
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db_1.db.execute('SELECT * FROM tasks WHERE id = ?', [id]);
            return rows.length ? new Task_1.Task(rows[0].id, rows[0].title, rows[0].description, rows[0].completed) : null;
        });
    }
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db_1.db.execute('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', [task.title, task.description, task.completed]);
            return new Task_1.Task(result.insertId, task.title, task.description, task.completed);
        });
    }
    updateTask(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.db.execute('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?', [task.title, task.description, task.completed, id]);
            return new Task_1.Task(id, task.title, task.description, task.completed);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db_1.db.execute('DELETE FROM tasks WHERE id = ?', [id]);
            return result.affectedRows > 0 ? { status: true } : { status: false };
        });
    }
}
exports.TaskRepository = TaskRepository;

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
exports.getTasks = exports.removeTask = exports.editTask = exports.addTask = void 0;
//import { createTask, updateTask, deleteTask, getTasksByUserId } from '../../persistencia/repositorios/taskRepository';
const TaskRepository_1 = require("../../persistencia/repositorios/TaskRepository");
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, TaskRepository_1.createTask)(task);
});
exports.addTask = addTask;
const editTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, TaskRepository_1.updateTask)(task);
});
exports.editTask = editTask;
const removeTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, TaskRepository_1.deleteTask)(id);
});
exports.removeTask = removeTask;
const getTasks = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, TaskRepository_1.getTasksByUserId)(userId);
});
exports.getTasks = getTasks;

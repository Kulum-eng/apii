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
exports.TaskService = void 0;
const Task_1 = require("../../persistencia/models/Task");
class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.getAllTasks();
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.getTaskById(id);
        });
    }
    createTask(title, description, completed) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new Task_1.Task(0, title, description, completed);
            return this.taskRepository.createTask(task);
        });
    }
    updateTask(id, title, description, completed) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new Task_1.Task(id, title, description, completed);
            return this.taskRepository.updateTask(id, task);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.deleteTask(id);
        });
    }
}
exports.TaskService = TaskService;

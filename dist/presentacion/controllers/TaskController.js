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
exports.TaskController = void 0;
class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.taskService.getAllTasks();
            res.json(tasks);
        });
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskService.getTaskById(Number(req.params.id));
            res.json(task);
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, completed } = req.body;
            const task = yield this.taskService.createTask(title, description, completed);
            res.status(201).json(task);
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, completed } = req.body;
            const task = yield this.taskService.updateTask(Number(req.params.id), title, description, completed);
            res.json(task);
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskService.deleteTask(Number(req.params.id));
            res.json(result);
        });
    }
}
exports.TaskController = TaskController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = require("express");
const TaskController_1 = require("../controllers/TaskController");
const TaskService_1 = require("../../negocio/services/TaskService");
const TaskRepository_1 = require("../../persistencia/repositorios/TaskRepository");
const taskRepository = new TaskRepository_1.TaskRepository();
const taskService = new TaskService_1.TaskService(taskRepository);
const taskController = new TaskController_1.TaskController(taskService);
exports.taskRoutes = (0, express_1.Router)();
exports.taskRoutes.get('/', taskController.getAllTasks.bind(taskController));
exports.taskRoutes.get('/:id', taskController.getTaskById.bind(taskController));
exports.taskRoutes.post('/', taskController.createTask.bind(taskController));
exports.taskRoutes.put('/:id', taskController.updateTask.bind(taskController));
exports.taskRoutes.delete('/:id', taskController.deleteTask.bind(taskController));

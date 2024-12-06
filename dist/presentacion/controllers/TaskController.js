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
exports.listTasks = exports.deleteTask = exports.updateTask = exports.createTask = void 0;
//import { addTask, editTask, removeTask, getTasks } from '../../negocio/services/taskService';
const TaskService_1 = require("../../negocio/services/TaskService");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, TaskService_1.addTask)(req.body);
        res.status(201).json({ message: 'Tarea creada', task });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, TaskService_1.editTask)(req.body);
        res.status(200).json({ message: 'Tarea actualizada' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, TaskService_1.removeTask)(Number(req.params.id));
        res.status(200).json({ message: 'Tarea eliminada' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
});
exports.deleteTask = deleteTask;
const listTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, TaskService_1.getTasks)(Number(req.params.userId));
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener tareas', error });
    }
});
exports.listTasks = listTasks;

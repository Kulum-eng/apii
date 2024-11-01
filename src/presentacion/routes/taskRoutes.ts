import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { TaskService } from '../../negocio/services/TaskService';
import { TaskRepository } from '../../persistencia/repositorios/TaskRepository';

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

export const taskRoutes = Router();
taskRoutes.get('/', taskController.getAllTasks.bind(taskController));
taskRoutes.get('/:id', taskController.getTaskById.bind(taskController));
taskRoutes.post('/', taskController.createTask.bind(taskController));
taskRoutes.put('/:id', taskController.updateTask.bind(taskController));
taskRoutes.delete('/:id', taskController.deleteTask.bind(taskController));

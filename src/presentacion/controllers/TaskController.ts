import { Request, Response } from 'express';
import { TaskService } from '../../negocio/services/TaskService';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async getAllTasks(req: Request, res: Response) {
    const tasks = await this.taskService.getAllTasks();
    res.json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    const task = await this.taskService.getTaskById(Number(req.params.id));
    res.json(task);
  }

  async createTask(req: Request, res: Response) {
    const { title, description, completed } = req.body;
    const task = await this.taskService.createTask(title, description, completed);
    res.status(201).json(task);
  }

  async updateTask(req: Request, res: Response) {
    const { title, description, completed } = req.body;
    const task = await this.taskService.updateTask(Number(req.params.id), title, description, completed);
    res.json(task);
  }

  async deleteTask(req: Request, res: Response) {
    const result = await this.taskService.deleteTask(Number(req.params.id));
    res.json(result);
  }
}

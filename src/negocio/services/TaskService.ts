import { Task } from '../../persistencia/models/Task';
import { TaskRepository } from '../../persistencia/repositorios/TaskRepository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.getTaskById(id);
  }

  async createTask(title: string, description: string, completed: boolean): Promise<Task> {
    const task = new Task(0, title, description, completed);
    return this.taskRepository.createTask(task);
  }

  async updateTask(id: number, title: string, description: string, completed: boolean): Promise<Task | null> {
    const task = new Task(id, title, description, completed);
    return this.taskRepository.updateTask(id, task);
  }

  async deleteTask(id: number): Promise<{ status: boolean }> {
    return this.taskRepository.deleteTask(id);
  }
}

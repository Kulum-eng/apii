import { db } from '../config/db';
import { Task } from '../models/Task';

export class TaskRepository {
  async getAllTasks(): Promise<Task[]> {
    const [rows] = await db.execute('SELECT * FROM tasks');
    return rows as Task[];
  }

  async getTaskById(id: number): Promise<Task | null> {
    const [rows]: any = await db.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    return rows.length ? new Task(rows[0].id, rows[0].title, rows[0].description, rows[0].completed) : null;
  }

  async createTask(task: Task): Promise<Task> {
    const [result]: any = await db.execute('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', [task.title, task.description, task.completed]);
    return new Task(result.insertId, task.title, task.description, task.completed);
  }

  async updateTask(id: number, task: Task): Promise<Task | null> {
    await db.execute('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?', [task.title, task.description, task.completed, id]);
    return new Task(id, task.title, task.description, task.completed);
  }

  async deleteTask(id: number): Promise<{ status: boolean }> {
    const [result]: any = await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return result.affectedRows > 0 ? { status: true } : { status: false };
  }
}

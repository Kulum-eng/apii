import pool from '../config/db';
import { Task } from '../models/Task';

export const createTask = async (task: Task): Promise<any> => {
  const [result] = await pool.query(
    'INSERT INTO tasks (userId, title, description, completed) VALUES (?, ?, ?, ?)',
    [task.userId, task.title, task.description, task.completed]
  );
  return result;
};

export const updateTask = async (task: Task): Promise<any> => {
  await pool.query(
    'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?',
    [task.title, task.description, task.completed, task.id]
  );
};

export const deleteTask = async (id: number): Promise<any> => {
  await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
};

export const getTasksByUserId = async (userId: number): Promise<Task[]> => {
  const [rows] = await pool.query('SELECT * FROM tasks WHERE userId = ?', [userId]);
  return rows as Task[];
};

//import { createTask, updateTask, deleteTask, getTasksByUserId } from '../../persistencia/repositorios/taskRepository';
import { createTask,updateTask,deleteTask,getTasksByUserId } from '../../persistencia/repositorios/TaskRepository';
import { Task } from '../../persistencia/models/Task';

export const addTask = async (task: Task): Promise<any> => {
  return await createTask(task);
};

export const editTask = async (task: Task): Promise<void> => {
  await updateTask(task);
};

export const removeTask = async (id: number): Promise<void> => {
  await deleteTask(id);
};

export const getTasks = async (userId: number): Promise<Task[]> => {
  return await getTasksByUserId(userId);
};
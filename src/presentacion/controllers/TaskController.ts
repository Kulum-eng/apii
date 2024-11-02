import { Request, Response } from 'express';
//import { addTask, editTask, removeTask, getTasks } from '../../negocio/services/taskService';
import { addTask,editTask,removeTask,getTasks } from '../../negocio/services/TaskService';

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await addTask(req.body);
    res.status(201).json({ message: 'Tarea creada', task });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea', error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    await editTask(req.body);
    res.status(200).json({ message: 'Tarea actualizada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea', error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await removeTask(Number(req.params.id));
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea', error });
  }
};

export const listTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks(Number(req.params.userId));
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas', error });
  }
};
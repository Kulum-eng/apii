import { Request, Response, NextFunction } from 'express';
import { addTask, editTask, removeTask, getTasks } from '../../negocio/services/TaskService';
import { getTasksByUserId } from '../../persistencia/repositorios/TaskRepository';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await addTask(req.body);
    res.status(201).json({ message: 'Tarea creada', task });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea', error });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = req.body;
    await editTask(task);

    // Obtener la tarea actualizada de la base de datos
    const updatedTask = await getTasksByUserId(task.userId); // Asumiendo que esto devuelve todas las tareas
    const updatedTaskData = updatedTask.find((t) => t.id === task.id);

    res.status(200).json({ message: 'Tarea actualizada', updatedTask: updatedTaskData });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea', error });
  }
};


export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    await removeTask(Number(req.params.id));
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea', error });
  }
};

export const listTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await getTasks(Number(req.params.userId));
    if (tasks.length === 0) {
      res.status(404).json({ message: 'No hay tareas para este usuario.' });
      return;
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas', error });
  }
}
import { Router } from 'express';
//import { createTask, updateTask, deleteTask, listTasks } from '../controllers/taskController';
import { createTask,updateTask,deleteTask,listTasks } from '../controllers/TaskController';


const router = Router();

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/user/:userId', listTasks);

export default router;

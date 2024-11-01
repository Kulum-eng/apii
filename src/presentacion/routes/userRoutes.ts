import { Router } from 'express';
import { UserController } from '../controllers/usersController';
import { UserService } from '../../negocio/services/UserService';
import { UserRepository } from '../../persistencia/repositorios/UserRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export const userRoutes = Router();
userRoutes.post('/register', userController.createUser.bind(userController));

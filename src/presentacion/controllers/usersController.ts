import { Request, Response } from 'express';
//import { registerUser, loginUser } from '../../negocio/services/userService';
import {registerUser, loginUser} from '../../negocio/services/UserService'
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await loginUser(email, password);
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
};
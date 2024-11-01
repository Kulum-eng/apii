import { Request, Response } from 'express';
import { UserService } from '../../negocio/services/UserService';

export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await this.userService.createUser(username, password);
    res.status(201).json(user);
  }
}

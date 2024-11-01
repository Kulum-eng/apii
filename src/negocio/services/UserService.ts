import { User } from '../../persistencia/models/User';
import { UserRepository } from '../../persistencia/repositorios/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findByUsername(username);
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = new User(0, username, password); // 0 for the id will be auto-incremented
    return this.userRepository.createUser(user);
  }
}

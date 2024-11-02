import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import { createUser, findUserByEmail } from '../../persistencia/repositorios/userRepository';
import { createUser,findUserByEmail } from '../../persistencia/repositorios/UserRepository';
import { User } from '../../persistencia/models/User';

export const registerUser = async (user: User): Promise<any> => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = { ...user, password: hashedPassword };
  return await createUser(newUser);
};

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const user = await findUserByEmail(email);
  if (user && await bcrypt.compare(password, user.password)) {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'defaultSecret', { expiresIn: '1h' });
  }
  return null;
};

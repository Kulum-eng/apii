import { db } from '../config/db';
import { User } from '../models/User';

export class UserRepository {
  async findByUsername(username: string): Promise<User | null> {
    const [rows]: any = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows.length ? new User(rows[0].id, rows[0].username, rows[0].password) : null;
  }

  async createUser(user: User): Promise<User> {
    const [result]: any = await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password]);
    return new User(result.insertId, user.username, user.password);
  }
}

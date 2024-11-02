import pool from '../config/db';
import { User } from '../models/User';

export async function createUser(user: User): Promise<User> {
  // Modificamos la consulta para incluir `username`
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [user.username, user.email, user.password];
  
  // Ejecutamos la consulta y obtenemos el `insertId` del nuevo usuario
  const [result] = await pool.query(query, values) as any; // Utilizamos `as any` para evitar problemas de tipos
  const insertId = result.insertId;

  // Recuperamos el usuario recién creado usando el ID
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [insertId]) as [User[], any];
  return rows[0];
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]) as [User[], any];
  return rows.length > 0 ? rows[0] : null;
}


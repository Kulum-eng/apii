// src/helpers/helperFunctions.ts
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: object): string {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

export function verifyToken(token: string): object | null {
  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);
    return typeof decoded === 'string' ? null : (decoded as JwtPayload);
  } catch (error) {
    return null;
  }
}

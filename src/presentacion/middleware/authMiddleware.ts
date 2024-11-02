// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ status: false, message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ status: false, message: 'Token no válido.' });
  }
}

// src/index.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import pool from '../src/persistencia/config/db';
import userRoutes from './presentacion/routes/userRoutes';
import taskRoutes from './presentacion/routes/taskRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Verificar conexión a la base de datos al iniciar
pool.getConnection()
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error de conexión a la base de datos:', err));

// Configuración de rutas
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

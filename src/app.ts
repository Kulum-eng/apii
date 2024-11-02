import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './presentacion/routes/userRoutes';
import taskRoutes from './presentacion/routes/taskRoutes';
import pool from './persistencia/config/db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Probar la conexión a la base de datos
pool.getConnection()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error en la conexión a la base de datos:', err));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

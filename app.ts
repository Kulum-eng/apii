import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { userRoutes } from './src/presentacion/routes/userRoutes';
import { taskRoutes } from './src/presentacion/routes/taskRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

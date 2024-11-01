import express from 'express';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

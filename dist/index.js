"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../src/persistencia/config/db"));
const userRoutes_1 = __importDefault(require("./presentacion/routes/userRoutes"));
const taskRoutes_1 = __importDefault(require("./presentacion/routes/taskRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Verificar conexión a la base de datos al iniciar
db_1.default.getConnection()
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.error('Error de conexión a la base de datos:', err));
// Configuración de rutas
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/tasks', taskRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

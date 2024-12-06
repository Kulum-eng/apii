"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./presentacion/routes/userRoutes"));
const taskRoutes_1 = __importDefault(require("./presentacion/routes/taskRoutes"));
const db_1 = __importDefault(require("./persistencia/config/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Probar la conexión a la base de datos
db_1.default.getConnection()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error en la conexión a la base de datos:', err));
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/tasks', taskRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

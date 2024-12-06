"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const UserService_1 = require("../../negocio/services/UserService");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, UserService_1.registerUser)(req.body);
        res.status(201).json({ message: 'Usuario registrado con éxito', user });
    }
    catch (error) {
        const err = error; // Asumimos que error podría tener la propiedad `code`
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ message: 'El correo ya está en uso', error: err });
        }
        else {
            res.status(500).json({ message: 'Error en el registro', error: err });
        }
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const token = yield (0, UserService_1.loginUser)(email, password);
    if (token) {
        res.status(200).json({ token });
    }
    else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});
exports.login = login;

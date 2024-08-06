import express from 'express';
import { crearUsuario, obtenerUsuarios } from '../controller/userController.js';

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

export default router;

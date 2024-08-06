import Usuario from '../models/User.js';

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try {
        const nuevoUsuario = await Usuario.create({ nombre, correo, contraseña });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario', detalles: error.message });
    }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener usuarios', detalles: error.message });
    }
};

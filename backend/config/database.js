import { Sequelize } from 'sequelize';

// Configuración de la conexión a la base de datos
export const sequelize = new Sequelize('HarmonyReflect', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres', // Cambia esto si usas otro dialecto
});


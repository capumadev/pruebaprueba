import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Asegúrate de que esta ruta sea correcta
import { sequelize } from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
app.use('/api/users', userRoutes);

// Iniciar el servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => console.error('Error al conectar con la base de datos:', err));

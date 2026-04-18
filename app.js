const express = require('express');
const app = express();
const path = require('path');
const rutasProductos = require('./routes/productoRoutes');

// Configuración de Pug 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares 
 // personalizado para loguear cada petición
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Para leer formularios
app.use(express.json()); // Para Thunder Client

// Uso de las rutas
app.use('/', rutasProductos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});
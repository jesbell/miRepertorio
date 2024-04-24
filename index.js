const express = require('express');
const pool = require('./dbConfig'); // Importa la configuración de la base de datos
const app = express();
const PORT = 3001;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
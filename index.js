const express = require('express');
const pool = require('./dbConfig'); // Importa la configuración de la base de datos
const { insertar, consultar, editar, eliminar } = require('./consultas');
const app = express();
const PORT = 3000;

app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para recibir los datos de una canción y realizar la inserción en la tabla canciones
app.post("/cancion", async (req, res) => {
    try {
        const datos = Object.values(req.body);
        const respuesta = await insertar(datos);
        res.json(respuesta);
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");
        
    }
});

// Ruta que devuelve un json con los registros de la tabla canciones
app.get("/canciones", async (req, res) => {
    try {
        const registros = await consultar();
        res.json(registros.rows);
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");        
    }
});

// Ruta que recibe los datos de una cancion que se desea editar
app.put("/cancion/:id", async (req, res) => {
    try {
        const id = req.params.id; // Obtiene el ID de la canción a editar
        const datos = Object.values(req.body); // Obtiene los datos actualizados de la canción
        const respuesta = await editar(id, datos); // Llama a la función editar para actualizar la canción
        res.json(respuesta);        
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");
    }
});

// Ruta que recibe un id de una canción para eliminar dicha canción en la tabla canciones
app.delete("/cancion/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const respuesta = await eliminar(id);
        res.json(respuesta);
        
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");
    }
});
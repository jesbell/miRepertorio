const express = require('express');
const pool = require('./dbConfig'); // Importa la configuración de la base de datos
const { insertar, consultar, editar/*, eliminar  */} = require('./consultas');
const app = express();
const PORT = 3005;

app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/cancion", async (req, res) => {
    try {
        const datos = Object.values(req.body);
        //console.log(req.body)
        const respuesta = await insertar(datos);
        res.json(respuesta);
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");
        
    }
});

app.get("/canciones", async (req, res) => {
    try {
        const registros = await consultar();
        console.log(registros.rows);
        res.json(registros.rows);
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");        
    }
});

app.put("/cancion/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const datos = Object.values(req.body);
        const respuesta = await editar(id, datos);
        //console.log(respuesta);
        res.json(respuesta);
        //console.log(id);
        
    } catch (error) {
        res.status(500).send("Algo salió mal :/ ...");
    }
});


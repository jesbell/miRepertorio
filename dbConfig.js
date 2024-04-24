const { Pool } = require('pg');

// Datos de conexión
const usuario = "";
const pass = "";

const pool = new Pool({
    user: usuario,
    host: 'localhost',
    database: 'repertorio',
    password: pass,
    port: 5432,
});

const conectarDB = async () => {
    try {
        const res = await pool.query(`SELECT NOW()`);
        console.log("Conexion exitosa, fecha y hora actuales:", res.rows[0]);
    } catch (error) {
        console.error("Error al conectar a la Base de datos", error);
    }
}
//Llamar a la funcion de conectarDB
conectarDB();

module.exports = pool;
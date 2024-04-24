const pool = require('./dbConfig');

const insertar = async(datos) => {
    const consulta = {
        text: "INSERT INTO canciones (titulo, artista, tono) values($1, $2, $3)",
        values: datos,
    };
    try {
        const result = await pool.query(consulta);
        return result;
    } catch (error) {
        console.error("Error al insertar en la base de datos:", error.message);
        throw error;
    }
};

const consultar = async () => {
    try {
        const result = await pool.query("SELECT * FROM canciones");
        return result;
    } catch (error) {
        console.error("Error al consultar la base de datos:", error.message);
        throw error;
    }
};

module.exports = { insertar, consultar/*, editar, eliminar */ };
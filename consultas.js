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

const editar = async (id, datos) => {
    const consulta = {
        text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4",
        values: [...datos, id], // ID al final
    };

    try {
        const result = await pool.query(consulta);
        return result;
    } catch (error) {
        console.error("Error al editar en la base de datos:", error.message);
        throw error;
    }
};

const eliminar = async (id) => {
    try {
        const result = await pool.query(`DELETE FROM canciones WHERE id ='${id}'`);
        return result;
    } catch (error) {
        console.error("Error al consultar la base de datos:", error.message);        
    }
}

module.exports = { insertar, consultar, editar, eliminar };
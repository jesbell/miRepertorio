-- Creación bbdd

CREATE DATABASE repertorio;

-- Creación tabla canciones
CREATE TABLE canciones (
    id SERIAL, 
    titulo VARCHAR(50), 
    artista VARCHAR(50), 
    tono VARCHAR(10));
DROP DATABASE IF EXISTS  percian_shop;
CREATE DATABASE percian_shop;
USE percian_shop

CREATE TABLE USUARIO (
    id_usuario INT AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_usuario)
)ENGINE=INNODB;

DESC usuario;

CREATE TABLE SESION (
    id_sesion INT AUTO_INCREMENT,
    estatus ENUM('Abierta','Cerrada'),
    id_usuario INT,
    PRIMARY KEY (id_sesion),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
)ENGINE=INNODB;
DESC Sesion;

INSERT INTO Usuario VALUES (1,'Luis','123');

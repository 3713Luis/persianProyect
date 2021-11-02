DROP DATABASE IF EXISTS  percian_shop;
CREATE DATABASE percian_shop;
USE percian_shop;

CREATE TABLE CLIENTE (
    id_cliente INT AUTO_INCREMENT,
    nombre_cliente VARCHAR(20) NOT NULL,
    apellido_paterno VARCHAR(20) NOT NULL,
    apellido_materno VARCHAR(20) NOT NULL,
    dirección TEXT NOT NULL,
    telefono INT(12) NOT NULL,
    PRIMARY KEY(id_cliente)
)ENGINE=INNODB;

DESC CLIENTE;

CREATE TABLE CUENTA (
    id_cuenta INT AUTO_INCREMENT,
    id_cliente INT,
    nombre_usuario VARCHAR(20) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    tipo_cliente ENUM('CLIENTE', 'ADMINISTRADOR') DEFAULT 'CLIENTE',
    PRIMARY KEY(id_cuenta),
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente)
)ENGINE=INNODB;
DESC CUENTA;

CREATE TABLE SESION (
    id_sesion INT AUTO_INCREMENT,
    id_cuenta INT,
    estatus ENUM('ABIERTA','CERRADA') DEFAULT 'CERRADA',
    PRIMARY KEY (id_sesion),
    FOREIGN KEY (id_cuenta) REFERENCES CUENTA(id_cuenta)
)ENGINE=INNODB;
DESC SESION;

CREATE TABLE BANNER (
    id_banner INT AUTO_INCREMENT,
    estatus ENUM('ABIERTA','CERRADA'),
    nombre_imagen VARCHAR(100) NOT NULL,
    base BLOB  NOT NULL,
    PRIMARY KEY (id_banner)
)ENGINE=INNODB;
DESC BANNER;

CREATE TABLE CATEGORIA (
    id_categoria INT AUTO_INCREMENT,
    nombre_categoria VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_categoria)
)ENGINE=INNODB;
DESC CATEGORIA;

CREATE TABLE ARTICULO (
    id_articulo INT AUTO_INCREMENT,
    id_categoria INT,
    nombre_articulo VARCHAR(50) NOT NULL,
    precio DECIMAL(6,2) NOT NULL,
    marca VARCHAR(20) NOT NULL,
    color VARCHAR(20) NOT NULL,
    fecha DATE NOT NULL,
    tamaño  VARCHAR(20) NOT NULL,
    descripción TEXT NOT NULL,
    PRIMARY KEY (id_articulo),
    FOREIGN KEY (id_categoria) REFERENCES CATEGORIA(id_categoria)
)ENGINE=INNODB;
DESC ARTICULO;

CREATE TABLE ESTATUS_ARTICULO (
    id_estatus_articulo INT AUTO_INCREMENT,
    id_articulo INT,
    cantidad_más_pedido INT DEFAULT 0,
    stock INT DEFAULT 0,
    FOREIGN KEY (id_articulo) REFERENCES ARTICULO(id_articulo),
    PRIMARY KEY (id_estatus_articulo)
)ENGINE=INNODB;
DESC ESTATUS_ARTICULO;


INSERT INTO Usuario VALUES (1,'Luis','123');

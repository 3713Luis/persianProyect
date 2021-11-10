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
    id_cliente INT NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    tipo_cliente ENUM('CLIENTE', 'ADMINISTRADOR') DEFAULT 'CLIENTE',
    PRIMARY KEY(id_cuenta),
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente)
)ENGINE=INNODB;
DESC CUENTA;

CREATE TABLE SESION (
    id_sesion INT AUTO_INCREMENT,
    id_cuenta INT NOT NULL,
    estatus ENUM('ABIERTA','CERRADA') DEFAULT 'CERRADA',
    PRIMARY KEY (id_sesion),
    FOREIGN KEY (id_cuenta) REFERENCES CUENTA(id_cuenta)
)ENGINE=INNODB;
DESC SESION;

CREATE TABLE BANNER (
    id_banner INT AUTO_INCREMENT,
    estatus ENUM('Activo','Inactivo'),
    nombre_img VARCHAR(100) NOT NULL,
    base64_img LONGBLOB NOT NULL,
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
    id_categoria INT NOT NULL,
    nombre_articulo VARCHAR(50) NOT NULL,
    precio DECIMAL(6,2) NOT NULL,
    marca VARCHAR(20) NOT NULL,
    color VARCHAR(20) NOT NULL,
    tono VARCHAR(20),
    material VARCHAR(20),
    referencia VARCHAR(20),
    ancho VARCHAR(20),
    largo VARCHAR(20),
    tamaño_generico VARCHAR(20),
    talla ENUM("C","M","G"),
    descripcion TEXT NOT NULL,
    mas_pedido INT DEFAULT 0,
    stock INT DEFAULT 0,
    fecha_registro DATE NOT NULL,
    estatus ENUM('Activo','Inactivo'),
    PRIMARY KEY (id_articulo),
    FOREIGN KEY (id_categoria) REFERENCES CATEGORIA(id_categoria)
)ENGINE=INNODB;
DESC ARTICULO;

CREATE TABLE IMAGENES (
    id_img INT AUTO_INCREMENT,
    id_articulo INT NOT NULL,
    first_img MEDIUMBLOB NOT NULL,
    second_img MEDIUMBLOB,
    third_img MEDIUMBLOB,
    fourth_img MEDIUMBLOB,
    fifth_img MEDIUMBLOB,
    PRIMARY KEY (id_img),
    FOREIGN KEY (id_articulo) REFERENCES ARTICULO(id_articulo)
)ENGINE=INNODB;
DESC IMAGENES;

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
INSERT INTO BANNER VALUES(1,'Inactivo','Imagen Secundaria','')

DELIMITER $$
CREATE PROCEDURE test_procedure_articulo2 (
    in idArticulo VARCHAR(20),
    in idCategoria int,
    in nombreArticulo VARCHAR(50),
    in pPrecio decimal,
    in pMarca VARCHAR(20),
    in pColor VARCHAR(20),
    in pTono VARCHAR(20),
    in pMaterial VARCHAR(20),
    in pReferencia VARCHAR(20),
    in pAncho VARCHAR(20),
    in pLargo VARCHAR(20),
    in tamañoGenerico VARCHAR(20),
    in pTalla VARCHAR(20),
    in pPescripcion VARCHAR(50),
    in masPedido int,
    in pStock int,
    in pEstatus VARCHAR(20)
)
BEGIN
  INSERT INTO ARTICULO VALUES (
      default,
      idCategoria,
      nombreArticulo,
      pPrecio,
      pMarca,
      pColor,
      pTono,
      pMaterial,
      pReferencia,
      pAncho,
      pLargo,
      tamañoGenerico,
      pTalla,
      pPescripcion,
      masPedido,
      pStock,
      CURRENT_TIMESTAMP,
      pEstatus
      );
      select * from ARTICULO;
END $$


CREATE TRIGGER insert_image BEFORE INSERT ON ARTICULO
  FOR EACH ROW BEGIN
    INSERT INTO IMAGENES SET ?, id_articulo = (SELECT id_articulo FROM ARTICULO ORDER BY id_articulo DESC LIMIT 1);
  END
|

DELIMITER ;
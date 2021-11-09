const { Router } = require('express');
const articulo = Router();
const utils = require('./utils/transacciones');

articulo.post('/api/add/articulo', (request, response) => {
    const sql = `INSERT INTO ARTICULO SET ?, fecha_registro=CURRENT_TIMESTAMP`
    const object = {
        id_articulo: request.body.id_articulo,
        id_categoria: request.body.id_categoria,
        nombre_articulo: request.body.nombre_articulo,
        precio: request.body.precio,
        marca: request.body.marca,
        color: request.body.color,
        tono: request.body.tono,
        material: request.body.material,
        referencia: request.body.referencia,
        ancho: request.body.ancho,
        largo: request.body.largo,
        tamaño_generico: request.body.tamaño_generico,
        talla: request.body.talla,
        descripcion: request.body.descripcion,
        mas_pedido: request.body.mas_pedido,
        stock: request.body.stock,
        estatus: request.body.estatus
    }
    utils.insert(sql, object, response, "Registro exitoso");
});

articulo.get('/api/consultar/articulos', (request, response) => {
    const sql = `SELECT * FROM ARTICULO`;
    utils.query(sql,response);
});

module.exports = articulo;
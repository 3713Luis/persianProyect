const { Router } = require('express');
const articulo = Router();
const utils = require('./utils/transacciones');

articulo.post('/api/add/articulo', (request, response) => {
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
        estatus: request.body.estatus,
    }
    const sql = `call test_procedure_articulo2 ('${object.id_articulo}',${request.body.id_categoria},'${request.body.nombre_articulo}',${request.body.precio},'${request.body.marca}','${request.body.color}','${request.body.tono}','${request.body.material}','${request.body.referencia}','${request.body.ancho}','${request.body.largo}','${request.body.tamaño_generico}','${request.body.talla}','${request.body.descripcion}',${request.body.mas_pedido},${request.body.stock},'${request.body.estatus}')`
   
    const additionalInfo = {
        id_img: 'default',
        first_img: request.body.img_1,
        second_img: request.body.img_2,
        third_img: request.body.img_3,
        fourth_img: request.body.img_4,
        fifth_img: request.body.img_5,
    }

    utils.insert(sql, object, response, "Registro exitoso");

});

articulo.get('/api/consultar/articulos', (request, response) => {
    const sql = `SELECT * FROM ARTICULO`;
    utils.query(sql,response);
});

articulo.get('/api/articulos/mas/pedidos', (request, response) => {
    const sql = `SELECT * FROM ARTICULO lIMIT 10`;
    utils.query(sql,response);
});

module.exports = articulo;
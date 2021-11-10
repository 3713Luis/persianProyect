const { Router } = require('express');
const articulo = Router();
const utils = require('./utils/transacciones');

articulo.post('/api/add/articulo', (request, response) => {
    const sql = `call test_procedure_articulo ('${request.body.id_articulo}',${request.body.id_categoria},'${request.body.nombre_articulo}',${request.body.precio},'${request.body.marca}','${request.body.color}','${request.body.tono}','${request.body.material}','${request.body.referencia}','${request.body.ancho}','${request.body.largo}','${request.body.tamaño_generico}','${request.body.talla}','${request.body.descripcion}',${request.body.mas_pedido},${request.body.stock},'${request.body.estatus}','${request.body.id_img}','${request.body.img_1}','${request.body.img_2}','${request.body.img_3}','${request.body.img_4}','${request.body.img_5}')`
    utils.query(sql,response);
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
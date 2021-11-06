const { Router } = require('express');
const categoria = Router();
const utils = require('./utils/transacciones');


categoria.post('/api/insert/categoria', (request, response) => {
    const sql = `INSERT INTO categoria SET ?`
    const object = {
        nombre_categoria: request.body.nombre_categoria
    }
    utils.insert(sql, object, response, "Registro exitoso");
});

categoria.get('/api/consulta-all/categoria', (request, response) => {
    const sql = 'SELECT * FROM categoria';
        utils.query(sql,response);
});

categoria.put('/api/update/categoria', (request, response) => {
    let identificador = request.body.id_categoria;
    const object = {
        nombre_categoria: request.body.nombre_categoria
    }
    const sql = `UPDATE categoria SET ? WHERE id_categoria = ${identificador}`;
    utils.insert(sql, object, response, `Categoria Modificada`);
});

categoria.delete('/api/delete/categoria', (request, response) => {
    let identificador = request.body.id_categoria;
    const sql = `DELETE FROM categoria WHERE id_categoria = ${identificador}`;
    utils.query(sql,response);
});




module.exports = categoria;
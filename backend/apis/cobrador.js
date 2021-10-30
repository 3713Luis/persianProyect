const { Router } = require('express');
const cobrador = Router();
const utils = require('./utils/transacciones')

cobrador.post('/api/add/cobrador', (request, response) => {
    const object = {
        id_usuario: request.body.id_usuario,
        id_deuda: request.body.id_deuda
    }
    const sql = `INSERT INTO cobrador SET ?`
    utils.insert(sql, object, response, `Se ha registrador un cobrador con sus vinculos`);
});

cobrador.get('/api/cobrador/:id', (request, response) => {
    const {id} = request.params;
    const sql = `SELECT id_deuda FROM cobrador WHERE id_usuario = ${id}`;
    utils.query(sql,response);
});


module.exports = cobrador;
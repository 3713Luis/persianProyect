const { Router, request, response } = require('express');
const acreedor = Router();
const utils = require('./utils/transacciones')

const innerQuery = 'INNER JOIN usuario ON usuario.id_usuario = acreedor.id_usuario INNER JOIN deuda ON deuda.id_deuda = acreedor.id_deuda'

acreedor.post('/api/add/acreedor', (request, response) => {
    const object = {
        id_usuario: request.body.id_usuario,
        id_deuda: request.body.id_deuda
    }
    const sql = `INSERT INTO acreedor SET ?`
    utils.insert(sql, object, response, `Se ha registrador un acreedor con sus vinculos`);
});

acreedor.get('/api/acreedor/:id', (request, response) => {
    const {id} = request.params;
    const sql = `SELECT id_deuda FROM acreedor WHERE id_usuario = ${id}`;
    utils.query(sql,response);
});

acreedor.get('/api/acreedor/all/:id', (request,response) => {
    const {id} = request.params;
    const sql = `Select * from acreedor ${innerQuery} where acreedor.id_usuario = ${id}`;
    utils.query(sql,response);
})

module.exports = acreedor;
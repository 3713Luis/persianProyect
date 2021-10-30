const { Router } = require('express');
const deuda = Router();
const utils = require('./utils/transacciones')

deuda.post('/api/add/deuda', (request, response) => {
    const object = {
        concepto: request.body.concepto,
        cantidad: request.body.cantidad
    }
    const sql = `INSERT INTO deuda SET ?, fecha=(SELECT CURDATE())`
    utils.insert(sql, object, response, `La deuda llamada -${object.concepto}- se ha registrado`);
});

deuda.get('/api/ultimoRegistro/deuda', (request, response) => {
    const sql = 'SELECT id_deuda FROM deuda ORDER BY id_deuda DESC LIMIT 1;';
        utils.query(sql,response);
});

deuda.get('/api/deuda/:id', (request, response) => {
    const {id} = request.params;
    const sql = `SELECT concepto, cantidad FROM deuda WHERE id_deuda = ${id}`;
    utils.query(sql,response);
});


module.exports = deuda;
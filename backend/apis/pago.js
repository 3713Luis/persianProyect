const { Router } = require('express');
const pago = Router();
const utils = require('./utils/transacciones')


pago.get('/api/pago', (request, response) => {
    const sql = 'SELECT * FROM pago';
    utils.query(sql,response);
});

pago.post('/api/insert/pago', (request, response) => {
    const sql = `INSERT INTO pago SET ?, fecha=(SELECT CURDATE())`
    const object = {
        saldo_total: request.body.saldo_total,
        abono: request.body.abono,
        id_acreedor: request.body.id_acreedor,
    }
   utils.insert(sql,object,response,"Respuesta Exitosa");
});

module.exports = pago;
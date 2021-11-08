const { Router } = require('express');
const articulo = Router();
const utils = require('./utils/transacciones');

artiuclo.post('/api/add/img', (request, response) => {
    const sql = `INSERT INTO ARTICULO SET ?`
    const object = {
        estatus: request.body.estatus,
        nombre_img: request.body.nombre_img,
        base64_img: request.body.base64_img
    }
    utils.insert(sql, object, response, "Registro exitoso");
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
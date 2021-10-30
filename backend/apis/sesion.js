const { Router } = require('express');
const sesion = Router();
const utils = require('./utils/transacciones')

//Cuando se registra por primera vez el usuario y cambia el estatus a "Abierta"
sesion.post('/api/add/sesion', (request, response) => {
    const sql = `INSERT INTO sesion SET ?`
    const object = {
        estatus: request.body.estatus,
        id_usuario: request.body.id_usuario
    }
   utils.insert(sql, object, response, `Sesión ${object.estatus}`);
});

//Modifica el estatus a "Cerrada" o "Abierta"
sesion.put('/api/update/status/:id', (request, response) => {
    const {id} =  request.params;
    const sql = `UPDATE sesion SET ? where id_usuario = ${id}`;
    const object = {
        estatus: request.body.estatus
    }
    utils.insert(sql, object, response, `Sesión ${object.estatus}`);
});

module.exports = sesion;
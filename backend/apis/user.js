const { Router } = require('express');
const user = Router();
const utils = require('./utils/transacciones')

user.get('/api/users', (request, response) => {
    const sql = 'SELECT * FROM usuario';
        utils.query(sql,response);
});

user.get('/api/users/:nombre', (request, response) => {
    console.log(request.params);
    const {nombre} = request.params;
    const sql = `SELECT * FROM usuario where nombre="${nombre}"`;
    utils.query(sql,response);
});

user.post('/api/users/validation', (request, response) => {
    const body = {
        nombre: request.body.nombre,
        contraseña: request.body.password
    }
    console.log(body);

    const sql = `SELECT * FROM usuario where nombre = "${body.nombre}" AND contraseña = "${body.contraseña}"`;
    utils.query(sql,response);
});


user.post('/api/insert/user', (request, response) => {
    const sql = `INSERT INTO usuario SET ?`
    const object = {
        nombre: request.body.nombre,
        contraseña: request.body.contraseña
    }
    utils.insert(sql, object, response, "Registro exitoso");
});

module.exports = user;
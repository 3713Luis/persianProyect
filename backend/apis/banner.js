const { Router } = require('express');
const banner = Router();
const utils = require('./utils/transacciones');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const url = path.join(__dirname, 'tempImage/');
const diskstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, url)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image');

banner.post('/api/add/img', (request, response) => {
    const sql = `INSERT INTO BANNER SET ?`
    const object = {
        estatus: request.body.estatus,
        nombre_img: request.body.nombre_img,
        base64_img: request.body.base64_img
    }
    utils.insert(sql, object, response, "Registro exitoso");
    console.log(response);
});

banner.post('/api/select/upload', fileUpload, (request, response) => {
    const sql = `INSERT INTO BANNER SET ?`
    const dataFile = fs.readFileSync(url + request.file.filename);
    const object = {
        estatus: request.body.estado,
        nombre_img: request.body.nombre_img,
        tipo: request.file.mimetype,
        base64_img: dataFile
    }
    console.log(url);

    utils.insert(sql, object, response, "Registro exitoso");
});

banner.get('/api/images', (request, response) => {
    const sql = `SELECT * FROM BANNER`;
    utils.query(sql, response);
});

banner.get('/api/images/all', (request, response) => {
    const sql = `SELECT * FROM BANNER`;
    utils.queryImg(sql, response);
});

banner.get('/api/image/byId/:idBanner', (request, response) => {
    const { idBanner } = request.params;
    const sql = `SELECT * FROM BANNER where id_banner="${idBanner}"`;
    utils.query(sql, response);
});

banner.get('/api/image/estatus', (request, response) => {
    const sql = `SELECT * FROM BANNER where estatus="Activo"`;
    utils.query(sql, response);
});

banner.get('/api/image/visible/:idBanner', (request, response) => {
    const { idBanner } = request.params;
    const sql = `SELECT * FROM BANNER where id_banner="${idBanner}" AND estatus="Activo"`;
    utils.query(sql, response);
});

banner.put('/api/update/status/:idBanner', (request, response) => {
    const { idBanner } = request.params;
    const sql = `UPDATE BANNER SET ? where id_banner = ${idBanner}`;
    const object = {
        estatus: request.body.estatus
    }
    utils.insert(sql, object, response, `Banner ${object.estatus}`);
});

banner.put('/api/update/img/:idBanner', (request, response) => {
    const { idBanner } = request.params;
    const sql = `UPDATE BANNER SET ? where id_banner = ${idBanner}`;
    const object = {
        nombre_img: request.body.nombre_img,
        base64_img: request.body.base64_img
    }
    utils.insert(sql, object, response, `Banner ${object.estatus}`);
});

banner.delete('/api/delete/img/:idBanner', (request, response) => {
    const { idBanner } = request.params;
    console.log(idBanner);
    const sql = `DELETE FROM BANNER where id_banner = ${idBanner}`;
    utils.query(sql, response);
});

module.exports = banner;
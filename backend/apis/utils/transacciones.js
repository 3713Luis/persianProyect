const connection = require('../../DB/database');

const fs = require('fs');
const path = require('path');

const insert = (sql, object, response, mensaje) => {
    connection.query(sql, object, error => {
        if (error) throw error;
        response.send(mensaje);
    });
}

const query = (sql,response) => {
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0 ) {
            response.json(results);
        }else {
            response.send('Not results');
        }
    });
}
const queryImg = (sql, response) => {
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            const arrayData = [];
            results.map(img => {
                fs.writeFileSync(path.join(__dirname, '/imagenes/' + img.id_banner + '-' + img.nombre_img), img.base64_img);
                const concatUrl = img.id_banner + '-' + img.nombre_img;
                arrayData.push({id: img.id_banner, name: img.nombre_img, estatus: img.estatus, urlName: concatUrl})
            })
           
            if (arrayData) {
                response.json(arrayData);
            }else {
                response.send('No hay datos que mostrar');

            }


        } else {
            response.send('Not results');
        }
    });
}

module.exports = {insert,query,queryImg};
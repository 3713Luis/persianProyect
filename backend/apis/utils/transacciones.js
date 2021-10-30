const connection = require('../../DB/database');


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

module.exports = {insert,query};
const mysql = require('mysql');
const chalk = require('chalk');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'percian_shop'
});

// Check Connection
connection.connect(error => {
    if (error) throw error;
    console.log(chalk.magentaBright('Database server running'));
});

module.exports = connection;
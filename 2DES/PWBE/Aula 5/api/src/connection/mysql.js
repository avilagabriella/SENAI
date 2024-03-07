const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhos'",
    user: "root",
    database: "transportadora"

});

module.exports = con;
const com = require('../connection/mysql');

//CRUD - READ
const getClintes = (req, resizeBy) => {
   con.query('select * from clinetes', (err, result) => {
    if (err) {
             req.status(500).send('Error ao listar clientes');
        }
        res.json(result);
    }); 
}

module.exports = {
    getClintes
}
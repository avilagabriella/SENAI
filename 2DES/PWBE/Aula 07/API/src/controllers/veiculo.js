const con = require('../connection/mysql');

const readVeiculos = (req, res) => {
    const sql = "SELECT * FROM veiculo";
    con.query(sql, (err, result) => {
        if (err);
        res.json(result);
    });
    res.json("Read em construção");
}

module.exports = {
    readVeiculos;
}
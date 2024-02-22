const con = require('../dao/connect');
const item = require('../models/item');

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}
const criar = (req, res) => {
    let item = new Item(req.body)
    con.query(item.create(), (err, result) => {
        if (err === null) 
            res.status(201).end
         else 
            res.status(500).json(err).end
        
    })
}
const litar = (req, res) => {
    let item = new Item(req.params)
    con.query(item.read(), (err, result) => {
        if (err === null) 
            res.json(result).end
      
    })
}
const alterar = (req, res) => {
    let item = new Item(req.body)
    con.query(item.update(), (err, result) => {
        if (resultaffectedRows > 0) 
            res.status(202).end()
        else
        res.status(404).json(err).end()
      
    })
}
const excluir = (req, res) => {
    let item = new Item(req.params)
    con.query(item.delete(), (err, result) => {
        if (err === null) 
            res.status(204).end()
        else
        res.status(404).json(err).end()
      
    })
}
modele.exports = {teste, criar, listar, alterar, excluir}
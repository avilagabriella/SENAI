//Dependências - Frameworks
const express = require("express");
const router = express.Routes();

const Veiculo = require("./Controllers/transportadora");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Inventário Papelaria PapelTudo respondendo!");
}

//Rotas de Saída - Item
router.get("/", teste);
router.post("/Veiculo", Veiculo.create);
router.get("/Veiculo", Veiculo.read);
router.put("/Veiculo/:id", Veiculo.update);
router.delete("/Veiculo/:id", Veiculo.del);

module.exports = Routes;
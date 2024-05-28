const express = require('express');

const router = express.Router();

const destinos = require('./controllers/destinos');
const hoteis = require('./controllers/hoteis');
const pontoturistico = require('./controllers/pontoturistico');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//Destinos
router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.delete('/destinos/:id', destinos.remove);
router.put('/destinos/:id', destinos.update);

router.get('/destinos/:id', destinos.readById);
router.post('/destinos/nome', destinos.readByName);

//Hoteis
router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/:id', hoteis.update);

router.get('/hoteis/:id', hoteis.readById);
router.post('/hoteis/nome', hoteis.readByName);

//PontosTuristicos
router.post('/pontosturisticos', pontosturisticos.create);
router.get('/pontosturisticos', pontosturisticos.read);
router.delete('/pontosturisticos/:id', pontosturisticos.remove);
router.put('/pontosturisticos/:id', pontosturisticos.update);

router.get('/pontosturisticos/:id', pontosturisticos.readById);
router.post('/pontosturisticos/nome', pontosturisticos.readByName);


module.exports = router;
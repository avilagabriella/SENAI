const express = require('express');

const router = express.Router();

const destinos = require('./controllers/destinos');
const hoteis = require('./controllers/hoteis');
const pontos_turisticos = require('./controllers/pontos_turisticos');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//destinos
router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.delete('/destinos/:id', destinos.remove);
router.put('/destinos/:id', destinos.update);

router.get('/destinos/:id', destinos.readById);
router.post('/destinos/nome', destinos.readByName);

//hoteis
router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/:id', hoteis.update);

//pontos_turisticos
router.post('/pontos_turisticos', pontos_turisticos.create);
router.get('/pontos_turisticos', pontos_turisticos.read);
router.delete('/pontos_turisticos/:id', pontos_turisticos.remove);
router.put('/pontos_turisticos/:id', pontos_turisticos.update);

module.exports = router;

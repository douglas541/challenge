const express = require('express');
const routes = express.Router();
const Petshop = require('../model/Petshop');

routes.get('/', async (req, res) => {
    try {
        const valores = await Petshop.findById("618d6c8899dd6d7f3a87d13f");

        return res.json(valores);
    } catch (err) {
        return res.status(400).send({ error: "Falha ao procurar valores" });
    }
});

routes.post('/cadastro', async (req, res) => {
    try {
        const valores = await Petshop.create(req.body);

        return res.json(valores);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar valores' });
    }
});

module.exports = app => app.use('/', routes);
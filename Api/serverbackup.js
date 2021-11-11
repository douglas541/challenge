const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.status(200).json({ 
        banho: 20,
        tosa: 30,
        banhoTosa: 40
    });
});

app.listen('3002');
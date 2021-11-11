const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const dbpassword = "admin";
const dbname = "petshop";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.get('/', (req, res) => {
//     res.status(200).json({
//         banho: 20,
//         tosa: 30,
//         banhoTosa: 40
//     });
// });

mongoose.connect(`mongodb+srv://admin:${dbpassword}@cluster0.m4q9w.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./src/controller/PetshopController')(app);

app.listen('3002');
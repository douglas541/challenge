const mongoose = require('mongoose');

const PetshopSchema = new mongoose.Schema({
    banho: {
        type: String,
        required: true
    },
    tosa: {
        type: String,
        required: true
    },
    desconto: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Petshop', PetshopSchema);
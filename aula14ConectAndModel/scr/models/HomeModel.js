const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    idade: {type: Number, required: true},
    tituloProfissional: {type: String, required: true}
})

const HomeModel = mongoose.model("Home", HomeSchema)

module.exports = HomeModel;
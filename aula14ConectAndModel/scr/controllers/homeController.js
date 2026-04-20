const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     nome: "DR House",
//     sobrenome: "Gregory",
//     idade: 53,
//     tituloProfissional: "Medico Diagnóstico"
// }).then((data) => {
//     console.log("Usuario criado com sucesso papai: " + data) 
// }).catch((err) => {
//     console.log("Erro inesperado: " + err)
// })
HomeModel.find().then((data) => {
    console.log("Usuario encontrado com sucesso pae o home é bom fi: " + data) 
}).catch((err) => {
    console.log("Erro inesperado: " + err)
})  

exports.home = (req, res, next) => {
    res.render('index')
    next(); 
}
exports.postHome = (req, res, next) => {
    res.send(`Olá ${req.body.nome} ${req.body.sobrenome}`);
    next();
}


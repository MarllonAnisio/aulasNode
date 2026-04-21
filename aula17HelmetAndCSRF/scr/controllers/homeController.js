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

exports.home = (req, res,) => {
    res.render('index', {
        titulo: "Injetando conteúdo nos views",
        numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    })
   
}
exports.postHome = (req, res, next) => {
    res.send(`Olá ${req.body.nome} ${req.body.sobrenome}`);
    next();
}


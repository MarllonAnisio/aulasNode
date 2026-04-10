exports.home = (req, res) => {
    res.render('index')
}
exports.postHome = (req, res) => {
    res.send(`Olá ${req.body.nome} ${req.body.sobrenome}`);
}
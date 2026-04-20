exports.home = (req, res, next) => {
    res.render('index')
    next(); 
}
exports.postHome = (req, res, next) => {
    res.send(`Olá ${req.body.nome} ${req.body.sobrenome}`);
    next();
}


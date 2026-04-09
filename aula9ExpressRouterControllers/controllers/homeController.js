exports.home = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <input type="text" name="sobrenome" placeholder="Digite seu sobrenome">           
            <button type="submit">Enviar</button>
            </form>         
    `);
}
exports.postHome = (req, res) => {
    res.send(`Olá ${req.body.nome} ${req.body.sobrenome}`);
}
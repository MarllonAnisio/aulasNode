exports.perfilUsuario = (req, res) =>  {
    res.send(`<h1>Perfil do usuário</h1>
    <p>Nome: ${req.params.nome}</p>
    <p>Sobrenome: ${req.params.sobrenome}</p>
    `);
}

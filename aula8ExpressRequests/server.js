const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000')
    console.log('Acesse http://localhost:3000 para ver a aplicação')
});

app.use(
    express.urlencoded(
        { 
            extended: true
        }
    )
);

app.get('/', (req, res) => {

    res.send('hello world');
});
app.get('/contato', (req, res) => {
    res.send('Página de contato');
});

app.get('/manda', (req, res) => {
    res.send(`
        <form action="/manda" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <input type="text" name="sobrenome" placeholder="Digite seu sobrenome">
            <input type="text" name="altura" placeholder="Digite sua altura">     
            <input type="text" name="idade" placeholder="Digite sua idade">             
            <button type="submit">Enviar</button>
            </form>         
    `);
});
app.post('/manda', (req, res) => {
    console.log(req.body);
    res.send(`
        <h1>Olá ${req.body.nome} ${req.body.sobrenome}</h1>
        <p>Você tem ${req.body.idade} anos e mede ${req.body.altura} metros</p>
    `);
});
/**
 * req.params -> parâmetros de rota ex: /testes/:id
 * req.query -> parâmetros de query
 * req.body -> corpo da requisição (POST, PUT, PATCH)
 * req.headers -> cabeçalhos da requisição
 * req.method -> método da requisição (GET, POST, etc)
 * req.url -> URL da requisição
 * req.path -> caminho da requisição
 * req.ip -> IP do cliente
 * req.cookies -> cookies da requisição
 * req.signedCookies -> cookies assinados da requisição
 * req.get() -> obter um cabeçalho específico
 * req.is() -> verificar o tipo de conteúdo da requisição
 * req.accepts() -> verificar os tipos de conteúdo aceitos pela requisição
 * req.acceptsCharsets() -> verificar os conjuntos de caracteres aceitos pela requisição
 * req.acceptsEncodings() -> verificar as codificações aceitas pela requisição
 * req.acceptsLanguages() -> verificar os idiomas aceitos pela requisição
 * req.range() -> obter um intervalo de bytes da requisição
 * req.param() -> obter um parâmetro específico da requisição
 * req.isAuthenticated() -> verificar se o usuário está autenticado (com Passport.js)
 * req.isUnauthenticated() -> verificar se o usuário não está autenticado (com Passport.js)
 * 
 * 
 * para passar parâmetros de rota, basta usar :nome do parâmetro na rota, ex: /testes/:id
 * para passar parâmetros de query, basta usar ?nome do parâmetro=valor na URL, ex: /testes?nome=João
 * para passar parâmetros no corpo da requisição, é necessário usar um middleware para parsear o corpo, 
 * ex: app.use(express.json()) para JSON ou app.use(express.urlencoded({ extended: true })) para form-urlencoded
 * toda via apenas usando o :nome o parametro tornasse obrigatório, ou seja, se não for passado o parâmetro, 
 * a rota não será encontrada, já usando ?nome do parâmetro=valor na URL, o parâmetro se torna opcional, ou seja,
 *  se não for passado o parâmetro, a rota ainda será encontrada, mas o valor do parâmetro será undefined
 * 
 * podemos para deixar-los opcionais usando o ? no final do nome do parametro, ex: /testes/:id? assim ele vira opcional.
 */


app.get('/teste{/:id}{/:nome}', (req, res) => {
    console.log(req.query);
    res.send(req.paraqueryms);
});
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000')
    console.log('Acesse http://localhost:3000 para ver a aplicação')
});

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
            <button type="submit">Enviar</button>
        </form>
        `)
});
app.post('/manda', (req, res) => {
    res.send(`
        <form action="/manda" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <button type="submit">Enviar</button>
        </form>
        `)
        console.log(req.body);
});

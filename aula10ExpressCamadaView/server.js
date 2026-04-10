const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'scr', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000')
    console.log('Acesse http://localhost:3000 para ver a aplicação')
});

app.use(routes);
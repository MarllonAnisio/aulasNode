const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000')
    console.log('Acesse http://localhost:3000 para ver a aplicação')
});

app.use(routes);
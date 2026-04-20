require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes')
const middleware = require('./scr/middlewares/middlewares');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect(process.env.uri)
    .then(() => {
        console.log("Conectado ao MongoDB");
        app.emit('Started');
    }).catch( err => console.log("Erro ao tentar conectar ao MongoDB:" + err))



app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'scr', 'views'));
app.set('view engine', 'ejs');

app.on('Started', () => {
    app.listen(3000, () => {
            console.log('Servidor Rodando na porta 3000')
            console.log('Acesse http://localhost:3000 para ver a aplicação')
    });
})

app.use(routes);
app.use(middleware);
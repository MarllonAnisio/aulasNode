require('dotenv').config();
const express = require('express');
const app = express();

// 1. Importações de Banco de Dados e Módulos de Terceiros
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const path = require('path');

// 2. Importações Nativas (Nossas Rotas e Middlewares)
const routes = require('./routes');
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./scr/middlewares/middlewares');

// 3. Conexão com o Banco de Dados
mongoose.connect(process.env.uri)
    .then(() => {
        console.log(" Conectado ao MongoDB");
        app.emit('Started');
    })
    .catch(err => console.log("Erro ao tentar conectar ao MongoDB: " + err));

// 4. Configurações de Segurança e Parseamento
app.use(helmet()); // O Helmet deve ser um dos primeiros para já proteger os cabeçalhos HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // envio de dados via fetch/JSON no futuro
app.use(express.static(path.resolve(__dirname, 'public')));

// 5. Configurações de Sessão e Mensagens Flash
const secretSession = session({
    secret: process.env.SECRETSESSION,
    store: MongoStore.create({ mongoUrl: process.env.uri }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true,
        secure: false
    }
});
app.use(secretSession);
app.use(flash());

// 6. Configurações das Views (EJS)
app.set('views', path.resolve(__dirname, 'scr', 'views'));
app.set('view engine', 'ejs');

// 7. Segurança CSRF (Sempre DEPOIS da sessão e ANTES das rotas)
app.use(csrf());

// 8. Nossos Middlewares Globais
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(globalMiddleware);

// 9. Chamada das Rotas
app.use(routes);

// 10. Ligando o Servidor (Sempre no final do arquivo!)
app.on('Started', () => {
    app.listen(3000, () => {
        console.log('Servidor Rodando na porta 3000');
        console.log('Acesse http://localhost:3000 para ver a aplicação');
    });
});
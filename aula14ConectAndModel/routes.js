const express = require('express');
const route = express.Router();
const homeController = require('./scr/controllers/homeController');
const perfilController = require('./scr/controllers/perfilControlller');

route.get("/", homeController.home);
route.post("/" , homeController.postHome);

route.get('/perfil', perfilController.perfilUsuario)



module.exports = route;
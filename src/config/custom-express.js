const express = require('express');
const app = express();
const rotas = require('../app/rotas/rotas');
rotas(app);
//sintaxe para exportar
module.exports = app;
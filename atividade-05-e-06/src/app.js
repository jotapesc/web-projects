// src/app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const animeRouter = require('./controllers/animeController'); // Roteador de animes

app.use(bodyParser.json()); // Para processar o corpo das requisições JSON
app.use('/api', animeRouter); // Define a rota base para as rotas de animes

module.exports = app; // Exporta a aplicação para ser usada no server.js

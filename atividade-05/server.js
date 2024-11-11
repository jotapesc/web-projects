const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const animeRoutes = require('./app');

app.use(bodyParser.json());

app.use('/api', animeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

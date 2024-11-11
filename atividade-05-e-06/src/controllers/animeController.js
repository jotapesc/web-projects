// src/controllers/animeController.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // Para gerar IDs únicos (UUID)

// Array inicial de animes (simula um banco de dados em memória)
let animes = [
    {
        id: uuidv4(),
        name: "Naruto",
        genre: "Ação",
        studio: "Pierrot"
    },
    {
        id: uuidv4(),
        name: "Attack on Titan",
        genre: "Ação",
        studio: "Wit Studio"
    }
];

// Listar todos os animes
router.get('/animes', (req, res) => {
    res.status(200).json(animes);
});

// Buscar um anime por id
router.get('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === req.params.id);
    if (anime) {
        res.status(200).json(anime);
    } else {
        res.status(404).json({ message: 'Anime não encontrado' });
    }
});

// Criar um novo anime
router.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const newAnime = {
        id: uuidv4(),
        name,
        genre,
        studio
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
});

// Atualizar um anime por id
router.put('/animes/:id', (req, res) => {
    const { name, genre, studio } = req.body;
    const animeIndex = animes.findIndex(a => a.id === req.params.id);

    if (animeIndex === -1) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }

    // Verifica se os campos são válidos
    if (!name || !genre || !studio) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Atualiza o anime
    animes[animeIndex] = { id: req.params.id, name, genre, studio };
    res.status(200).json(animes[animeIndex]);
});

// Deletar um anime por id
router.delete('/animes/:id', (req, res) => {
    const animeIndex = animes.findIndex(a => a.id === req.params.id);
    if (animeIndex === -1) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }

    animes.splice(animeIndex, 1);
    res.status(204).end();
});

module.exports = router;

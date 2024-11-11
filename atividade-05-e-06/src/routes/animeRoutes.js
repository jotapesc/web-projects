const express = require('express');
const router = express.Router();
const AnimeController = require('../controllers/animeController');

router.get('/animes', AnimeController.getAllAnimes);
router.get('/animes/:id', AnimeController.getAnimeById);
router.post('/animes', AnimeController.createAnime);
router.put('/animes/:id', AnimeController.updateAnime);
router.delete('/animes/:id', AnimeController.deleteAnime);

module.exports = router;

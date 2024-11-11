const animeRepository = require('../repositories/animeRepository');

const getAllAnimes = () => {
    return animeRepository.getAllAnimes();
};

const getAnimeById = (id) => {
    const anime = animeRepository.getAnimeById(id);
    if (!anime) throw new Error('Anime não encontrado');
    return anime;
};

const createAnime = (animeData) => {
    if (!animeData.name || !animeData.genre || !animeData.studio) {
        throw new Error('Todos os campos são obrigatórios');
    }
    return animeRepository.createAnime(animeData);
};

const updateAnime = (id, animeData) => {
    if (!animeData.name || !animeData.genre || !animeData.studio) {
        throw new Error('Todos os campos são obrigatórios');
    }
    return animeRepository.updateAnime(id, animeData);
};

const deleteAnime = (id) => {
    const deleted = animeRepository.deleteAnime(id);
    if (!deleted) throw new Error('Anime não encontrado');
    return true;
};

module.exports = {
    getAllAnimes,
    getAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
};

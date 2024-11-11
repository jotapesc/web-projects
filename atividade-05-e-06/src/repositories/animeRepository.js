const { v4: uuidv4 } = require('uuid');

// Simulando um banco de dados em memória
let animes = [
    { id: uuidv4(), name: "Naruto", genre: "Ação", studio: "Pierrot" },
    { id: uuidv4(), name: "Attack on Titan", genre: "Ação", studio: "Wit Studio" }
];

// Funções do repositório
const getAllAnimes = () => animes;

const getAnimeById = (id) => animes.find(anime => anime.id === id);

const createAnime = (anime) => {
    const newAnime = { ...anime, id: uuidv4() };
    animes.push(newAnime);
    return newAnime;
};

const updateAnime = (id, updatedAnime) => {
    const index = animes.findIndex(anime => anime.id === id);
    if (index === -1) return null;
    animes[index] = { id, ...updatedAnime };
    return animes[index];
};

const deleteAnime = (id) => {
    const index = animes.findIndex(anime => anime.id === id);
    if (index === -1) return false;
    animes.splice(index, 1);
    return true;
};

module.exports = {
    getAllAnimes,
    getAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
};

import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=0aa65e4619522625732d7fa2a4caca8d&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

});

export default api;
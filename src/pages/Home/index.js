import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import './home.css'

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '0aa65e4619522625732d7fa2a4caca8d',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            let movieList = response.data.results.slice(0, 20)
            movieList.splice(6, 1)
            movieList.splice(11, 1)
            movieList.splice(14, 1)
            movieList.splice(14, 1)
            movieList.splice(15, 1)
            movieList.splice(10, 1)

            setMovies(movieList);
            setLoading(false)
        }

        loadMovies();

    }, []);

    if(loading) {
        return(
            <h2 className="loading">Carregando filmes...</h2>
        )
    }

    return(
        <div className="container">
            <h1 className="home-title">Filmes em Cartaz</h1>
            <div className="movie-list">
                {movies.map((movie) => {
                    return(
                        <article className="article" key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                            <Link className="movie-button" to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
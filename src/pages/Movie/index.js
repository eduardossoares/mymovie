import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/ReactToastify.css';

import api from "../../services/api";
import './movie.css';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    const notify = (msg) => toast.success(msg, {
    });
    const alertNotify = (msg) => toast.error(msg, {
        pauseOnHover: false,
    });

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '0aa65e4619522625732d7fa2a4caca8d',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log('error')
                    navigation("/", { replace: true });
                    return;
                })
        }
        loadMovie()

        return () => {
            console.log('Componente desmontado!');
        }
    }, [navigation, id]);

    function saveMovie() {
        const myList = localStorage.getItem("@mymovie");

        let moviesSaveds = JSON.parse(myList) || [];

        const hasMovie = moviesSaveds.some((moviesSaveds) => moviesSaveds.id === movie.id)

        if(hasMovie) {
            alertNotify('Filme já se encontra salvo! Cheque sua lista.');
            return;
        }

        notify('Filme salvo com sucesso!')
        moviesSaveds.push(movie)
        localStorage.setItem("@mymovie", JSON.stringify(moviesSaveds))
    }

    if (loading) {
        return (
            <div className="movie-details">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1 className="movie-title">{movie.title}</h1>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <div className="sinopse">
                <h3 className="sinopse-title">Sinopse:</h3>
                <p className="sinopse-text">{movie.overview}</p>
            </div>
            <div className="buttons">
                <strong className="average">Avaliação: {movie.vote_average.toFixed(1)}</strong>
                <button onClick={ saveMovie } className="save-button">Salvar</button>
                <button className="trailer-button">
                    <a rel="external" href={ `https://youtube.com/results?search_query=${movie.title} Trailer` } target="_blank">Trailer</a>
                </button>
            </div>
            <ToastContainer
            limit={2} />
        </div>
    )
}

export default Movie;
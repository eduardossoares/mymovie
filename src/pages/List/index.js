import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/ReactToastify.css';

import './list.css';

function List() {
    const [movies, setMovies] = useState([]);

    const notify = (msg) => {
        toast.success(msg, {
            closeOnClick: true,
            pauseOnHover: false,
        });
    }

    useEffect(() => {
        const myList = localStorage.getItem("@mymovie");
        setMovies(JSON.parse(myList) || []);
    }, []);

    const removeMovie = (id) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem("@mymovie", JSON.stringify(updatedMovies));
        notify('Filme removido com sucesso!');
    };

    return(
        <div className="my-list">
            <h1>Minha Lista</h1>

            {movies.length === 0 ? (
                <p className='empty-list'>Sua lista está vazia.</p>
            ) : (
                <ul>
                    {movies.map((movie) => {
                        return(
                            <li key={movie.id}>
                                <span>{movie.title}</span>
                                <div>
                                    <Link to={`/filme/${movie.id}`}>Detalhes</Link>
                                    <button onClick={() => removeMovie(movie.id)}><span>Remover</span></button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <ToastContainer />
        </div>
    );
}

export default List;
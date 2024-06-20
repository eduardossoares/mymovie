import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    return( 
        <header className="header">
            <div>
                <Link className="logo-home" to="/mymovie"><h1>my<span className="movie-logo">Movie</span></h1></Link>
            </div>

            <div>
                <Link to="/minha-lista"><button className="movies-button">Minha Lista</button></Link>
            </div>
        </header>
    )
} 

export default Header;
import { Link } from "react-router-dom";

import './error.css';

function Error() {
    return(
        <div className="error-message">
            <h1 className="not-found">404</h1>
            <h2>Página não encontrada!</h2>
            <Link className="link-ref" to="/mymovie">Veja todos filmes!</Link>
        </div>
    )
}

export default Error;
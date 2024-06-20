import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie';
import List from "./pages/List";
import Error from "./pages/Error";

import Header from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/mymovie" element={<Home />} />
                <Route path="/minha-lista" element={<List />} />
                <Route path="/filme/:id" element={<Movie />} />

                <Route path="*" element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
import React from 'react';
import { NavLink, Route} from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/movies-app/movie" >Movies</NavLink>
                        <NavLink to="/movies-app/movie/favs" >Favourites</NavLink>
                        <NavLink to="/movies-app/movie/aboutMe" >About Me</NavLink>
                    </li>
                </ul>
                
            </nav>
            <Route exact path = "/movies-app/movie">
                <span className="buscPlaceholder">Search...</span>
            </Route>
        </header>
    )
}

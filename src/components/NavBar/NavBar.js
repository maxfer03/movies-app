import React from 'react';
import { NavLink, Route} from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink exact to="/movie" >Movies</NavLink>
                        <NavLink to="/movie/favs" >Favourites</NavLink>
                        
                    </li>
                </ul>
                
            </nav>
            <Route exact path = "/movie">
                <span className="buscPlaceholder">Search...</span>
            </Route>
        </header>
    )
}

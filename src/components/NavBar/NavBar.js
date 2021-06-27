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
                        <NavLink to="/favs" >Favoritas</NavLink>
                        
                    </li>
                </ul>
                
            </nav>
            <Route exact path = "/">
                <span className="buscPlaceholder">Buscador</span>
            </Route>
        </header>
    )
}

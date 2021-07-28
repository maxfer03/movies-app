import React from "react";

import Landing from "./components/Landing/Landing";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import Movie from "./components/Movie/Movie";
import AboutMe from "./components/AboutMe/AboutMe";
import { Route } from "react-router-dom";

/* <React.Fragment>
          <Route path = "/movie" component = {NavBar}/>
          <Route exact path = "/" component = {Landing} />
          <Route exact path="/movie" component={Buscador} />
          <Route path="/movie/favs" component={Favorites} />
          <Route path="/movie/ID:id" component={Movie} />
      </React.Fragment> */

function App() {
  return (
    <React.Fragment>
          <Route path = "/movies-app/movie" component = {NavBar}/>
          <Route exact path = "/movies-app/" component = {Landing} />
          <Route exact path="/movies-app/movie" component={Buscador} />
          <Route path="/movies-app/movie/favs" component={Favorites} />
          <Route path="/movies-app/movie/ID:id" component={Movie} />
          <Route exact path="/movies-app/movie/aboutMe" component={AboutMe} />
      </React.Fragment> 
  );
}

export default App;

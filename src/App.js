import React from "react";

import Landing from "./components/Landing/Landing";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import Movie from "./components/Movie/Movie";
import { Route } from "react-router-dom";

function App() {
  return (
      <React.Fragment>
          <NavBar/>
          <Route exact path = "/landing" component = {Landing} />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;

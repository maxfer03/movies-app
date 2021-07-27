import React from "react";

import Landing from "./components/Landing/Landing";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import Movie from "./components/Movie/Movie";
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
          <Route path = "/react-deploy/movie" component = {NavBar}/>
          <Route exact path = "/react-deploy/" component = {Landing} />
          <Route exact path="/react-deploy/movie" component={Buscador} />
          <Route path="/react-deploy/movie/favs" component={Favorites} />
          <Route path="/react-deploy/movie/ID:id" component={Movie} />
      </React.Fragment> 
  );
}

export default App;

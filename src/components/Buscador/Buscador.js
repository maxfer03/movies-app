import React, {useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite} from "../../actions/index.js"
import './Buscador.css';

const img_not_found = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"

function mapStateToProps(state)
{
  return {movies: state.moviesLoaded};
}

function mapDispatchToProps(dispatch)
{
  return {
    
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}


export function Buscador({movies, getMovies, addMovieFavorite}){
  const [input, setInput] = useState("")
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getMovies(input)
    setInput("")
  }
  /* const { title } = this.state; */
  return (
    <div>
      <div className="emptyness"/>
        <div className= "Searcher">
          <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
            <div>
              
              <input
                className = "inputStyle"
                type="text"
                id="title"
                autoComplete="off"
                placeholder =". . ."
                value={input}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
        
      <div className="positioner">
      {movies.map((movie) => 
        <div className ="movies" key = {movie.imdbID}>
            {movie.Poster === "N/A" ? 
              <img  className ="mainPoster" alt = "img not found" src={img_not_found}/> : 
              <img className ="mainPoster" alt = "Movie Poster" src={movie.Poster}/>
            }
          <button className = "favButton" onClick={() => 
            addMovieFavorite({title: movie.Title, id: movie.imdbID})}>
            Fav
          </button>
          <div className = "titleContainer">
            <Link to={`/movie/ID${movie.imdbID}`} className = "movieTitle">
              {movie.Title}
            </Link>
          </div>
          
        </div>
        )
      }
      </div>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)



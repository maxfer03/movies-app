import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
 import { Link } from 'react-router-dom';
import './Favorites.css';

function mapStateToProps(state)
{
  return {movies: state.moviesFavourites};
}

/* function mapDispatchToProps(dispatch)
{
  return {

    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
} */

export function ConnectedList({movies, removeMovieFavorite}){
  return (
    <div className = "allFav">
      <div className ="structure">
        <div className="emptyness"/>
        <h2>Películas Favoritas</h2>
        <ul>
        {movies.map((movie) =>
          <div>
            <span className = "listOrder">
              <Link to={`/movie/${movie.id}`} className = "favTitle">
              - {movie.title}
              </Link>
              <button class = "delFav"onClick={()=>{removeMovieFavorite(movie.id)}}>delete</button>
            </span> 
            
          </div>)}
        </ul>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);

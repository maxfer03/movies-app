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
        <h2>Favourite movies:</h2>

        {movies.length === 0 ? 
          <span>To add any movie to the list, click the "Fav" button on their card!</span> 
          : 
          <ul>
          {
            movies.map((movie) =>
            <div>
              <li className = "listOrder">
                <span> - <Link to={`/movie/${movie.id}`} className = "favTitle">
                {movie.title}
                </Link></span> 
                <button class = "delFav"onClick={()=>{removeMovieFavorite(movie.id)}}>delete</button>
              </li> 
            </div>)
          }
          </ul>}

      </div>
    </div>
  );
}
export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);

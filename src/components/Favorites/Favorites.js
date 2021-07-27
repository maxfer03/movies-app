import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
 import { Link } from 'react-router-dom';
import './Favorites.css';

function mapStateToProps(state)
{
  return {movies: state.moviesFavourites};
}



export function ConnectedList({movies, removeMovieFavorite}){

  useEffect(() =>{
    let isClicked = false
    const button = document.querySelector(".structurer")
    const poster =document.querySelectorAll(".favPoster")
    const list = document.querySelector(".favList")
    const listItem = document.querySelectorAll(".listOrder")
    const contaier = document.querySelector(".structure")
    const title = document.querySelectorAll(".favTitle")
    const puntito = document.querySelectorAll(".mark")
    const delBut = document.querySelectorAll(".delFav")

    if(list === null)
    {
      button.style.display = 'none'
      return "nothing"
    }
    else
    button.addEventListener("click", () =>
    {

      switch(isClicked)
      {
        case false:
          isClicked = true
          button.textContent = "Cards"
          contaier.style.width = "1000px"
          poster.forEach(e => e.style.display = 'block')
          list.style.flexDirection = "row"
          title.forEach(e => e.style.display = 'none')
          puntito.forEach(e => e.style.display = 'none')
          listItem.forEach(e => e.style.flexDirection = 'column')
          delBut.forEach(e => e.style.marginLeft = '0px')
          break;
        case true:
          isClicked = false
          button.textContent = "List"
          contaier.style.width = "400px"
          poster.forEach(e => e.style.display = 'none')
          list.style.flexDirection = "column"
          title.forEach(e => e.style.display = 'inline')
          puntito.forEach(e => e.style.display = 'inline')
          delBut.forEach(e => e.style.marginLeft = '30px')
          listItem.forEach(e => e.style.flexDirection = 'row')
          break;
        default:
          return "error"
      }
    })

  })
  return (
    <div className = "allFav">
      <div className ="structure">
        <div className="emptyness"/>
        <h2>Favourite movies:</h2>
        <button className = "structurer">List</button>
        {movies.length === 0 ? 
          <span>To add any movie to the list, click the "Fav" button on their card! Dont worry if you click on the same movie twice, it will be filtered out.</span> 
          : 
          <ul className = "favList">
          {
            movies.map((movie) =>
            <div>
              <li className = "listOrder">
                <img className ="favPoster" src={movie.poster} alt = "Movie Poster"/>
                <span className = "mark"> ● <Link to={`/movie/ID${movie.id}`} className = "favTitle" key = {movie.id}>
                {movie.title}
                </Link></span> 
                <button className = "delFav" onClick={()=>{removeMovieFavorite(movie.id)}}>delete</button>
              </li> 
            </div>)
          }
          </ul>
        }
      </div>
    </div>
  );
}
export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);

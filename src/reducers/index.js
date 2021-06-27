import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions/index.js"

const initialState =
{
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState, action)
{
  const repeated = state.moviesFavourites.filter(e => e.title === action.payload.title)

  const addFav = () =>
  {
    console.log(repeated)
     if (repeated.length > 0)
    {
      console.log("se repite!!!")
      return {...state}
    }
    else
    console.log("agregue un fav")
    return {...state, moviesFavourites: state.moviesFavourites.concat(action.payload) }
  }

    switch (action.type) {
        case ADD_MOVIE_FAVORITE:
          return addFav()
        case GET_MOVIES:
          return {...state, moviesLoaded: action.payload.Search}
        case GET_MOVIE_DETAIL:
          return {...state, movieDetail: action.payload}
        case REMOVE_MOVIE_FAVORITE:
          return {...state, moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== action.payload) }
        default:
          return state;
    }
}

/* con ifs:  
function rootReducer(state = initialState, action)
{
    if (action.type === ADD_MOVIE_FAVORITE)
    {
        return {...state, moviesFavourites: state.moviesFavourites.concat(action.payload) }
    }

    if (action.type === GET_MOVIES)
    {
        return {...state, moviesLoaded: action.payload.Search}
    }
    if (action.type === GET_MOVIE_DETAIL)
    {
        return "test"
    }
    if (action.type === REMOVE_MOVIE_FAVORITE)
    {
        return "test"
    }
} */



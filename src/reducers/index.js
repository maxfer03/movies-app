import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions/index.js"

const initialState =
{
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState, action)
{
    switch (action.type) {
        case ADD_MOVIE_FAVORITE:
          return {...state, moviesFavourites: state.moviesFavourites.concat(action.payload) }
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



export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIE_DETAIL= "GET_MOVIE_DETAIL"
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const MODIFY_MOVIE = "MODIFY_MOVIE"


  /* payload: datos que puede llevar que usaremos 
   en nuestro reducer para actualizar el estado */
    const apiKey = '9c8bf6f0'
export const getMovies = (titulo) => {
    
    return function(dispatch) {
        
        return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
            
          .then(response =>  response.json())
          .then(json => {
              if(json.Search !== undefined)  
            {
                dispatch({ type: GET_MOVIES, payload: json });
            }
            else {alert("Movie not found.")}
        });
        
    };
};

  
export const getMovieDetail = (id) => {
    
    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            
          .then(response =>  response.json())
          .then(json => {  
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
        
    };
};

  
export const addMovieFavorite = ({title, id, poster}) => {
    /* console.log(poster) */
    return {type: ADD_MOVIE_FAVORITE, payload: {title, id, poster}} //el payload que pasaremos cuando hagamos un dispatch de esa action sera el nombre de la Pelicula
};

export const removeMovieFavorite = (id) => {  //aca, nuestro payload sera la pelicula a eliminar
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
};

export const modfyMovie = (id) =>{
    return {type : MODIFY_MOVIE, payload: id}
}
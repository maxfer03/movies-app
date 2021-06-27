export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIE_DETAIL= "GET_MOVIE_DETAIL"
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const MODIFY_MOVIE = "MODIFY_MOVIE"


  /* payload: datos que puede llevar que usaremos 
   en nuestro reducer para actualizar el estado */

export const getMovies = (titulo) => {
    console.log("llegue a get muvis")
    return function(dispatch) {
        console.log("entre al dispatch")
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
            
          .then(response =>  response.json(console.log("aca estoy en el response")))
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
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
            
          .then(response =>  response.json(console.log(response)))
          .then(json => {  
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
        
    };
};

  
export const addMovieFavorite = (title) => {
    return {type: ADD_MOVIE_FAVORITE, payload: title} //el payload que pasaremos cuando hagamos un dispatch de esa action sera el nombre de la Pelicula
};

export const removeMovieFavorite = (id) => {  //aca, nuestro payload sera la pelicula a eliminar
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
};

export const modfyMovie = (id) =>{
    return {type : MODIFY_MOVIE, payload: id}
}
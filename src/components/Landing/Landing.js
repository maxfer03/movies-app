import React, {useState } from "react";
import { connect } from "react-redux";
import { getMovies, addMovieFavorite} from "../../actions/index.js"
import "./Landing.css"

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

export function Landing (props){


    const getMovies = props.getMovies


    const [input, setInput] = useState("")
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getMovies(input)
    props.history.push("/")

  }

    return (
        <div className = "landingPage">
            <div className = "center">
            <h1>Welcome to my movie index!</h1>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            
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
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
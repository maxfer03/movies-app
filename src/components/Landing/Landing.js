import React, {useEffect, useState } from "react";
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
    props.history.push("/movie")

  }
  useEffect(() => {
    const card = document.querySelector(".landingStructure")
    const container = document.querySelector(".landingContainer")
    
    container.addEventListener("mousemove", (e) =>
    {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    })
  })

  return (
        <div className = "landingPage">
            <div className = "landingContainer">
              <div className = "landingStructure">
              <h1>Welcome to my movie index!</h1>

                  <form className = "landingForm"onSubmit={(e) => handleSubmit(e)}>
                      <div>
                          <input
                              className= "landingInput"
                              type="text"
                              id="title"
                              autoComplete="off"
                              placeholder =". . ."
                              value={input}
                              onChange={(e) => handleChange(e)}
                          />
                      </div>
                      <button className = "landingButton" type="submit">Search</button>
                  </form>

              </div>
            </div>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
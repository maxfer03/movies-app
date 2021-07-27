import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
}
// Para convertir esto a funcion,
// necesito aprender bien los hooks
// de react (useEffect), porque
// el life cycle no funca sino
class Movie extends React.Component {

    componentDidMount()
    {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <div className="emptyness"/>
                <div className = "detailPage">
                    <div className="movieCard">
                        <img  className = "poster" alt = "Movie Poster" src={this.props.movie.Poster} />
                        <div className = "movieInfo">
                            <h2 className = "movieInfoTitle">{this.props.movie.Title} ({this.props.movie.Year})</h2>
                            <div className = "quickFacts">
                                <span className = "fact topFact">Genre: {this.props.movie.Genre}</span>
                                <span className = "fact">Runtime: {this.props.movie.Runtime}</span>
                                
                                <span className = "fact">Cast: {this.props.movie.Actors}, and others.</span>
                                <span className = "fact btmFact">Director: {this.props.movie.Director}</span>
                            </div>
    
                            <span>{this.props.movie.Plot}</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
    
}



export default connect(mapStateToProps, {getMovieDetail}) (Movie);
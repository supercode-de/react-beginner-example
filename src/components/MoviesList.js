import MovieCover from "./MovieCover";

const MoviesList = (props) => {
    return ( 
        <div className="movie-grid">
            { props.movies.map((movie, i) => <MovieCover movie={movie} />) }
        </div>
     );
}
 
export default MoviesList;
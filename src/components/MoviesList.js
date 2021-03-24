import MovieCover from "./MovieCover";

const MoviesList = (props) => {

    const hello = 'Hallo Welt!';

    const elems = [<p>Hallo</p>, <b>Welt</b>];

    const movies = props.movies.map((movie, i) => 
        <MovieCover 
            key={i}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            rate={movie.rate}
            genre={movie.genre}
            
        />);



    return ( 
        <div className="movie-grid">
            {movies}
        </div>
     );
}
 
export default MoviesList;
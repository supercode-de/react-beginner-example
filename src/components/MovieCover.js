const MovieCover = (props) => {
    return (  
        <div className="movie-item">
            <div>{props.movie.title}</div>
            <div>{props.movie.year}</div>
            <div>{props.movie.director}</div>
            <div>{props.movie.duration}</div>
            <div>{props.movie.rate}</div>
            <ul className='genres'>
                {props.movie.genre.map((genre, i) => <li key={i}>{genre}</li>)}
            </ul>
        </div>
    );
}
 
export default MovieCover;
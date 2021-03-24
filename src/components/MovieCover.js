import Rating from "./Rating";

const MovieCover = (props) => {

    const { title, year, director, duration, rate, genre } = props;

    return (  
        <div className="movie-item">
            <div>{title}</div>
            <div>{year}</div>
            <div>{director}</div>
            <div>{duration}</div>

            <Rating rating={rate} />

            <ul className='genres'>
                {genre.map((genre, i) => <li key={i}>{genre}</li>)}
            </ul>
        </div>
    );
}
 
export default MovieCover;
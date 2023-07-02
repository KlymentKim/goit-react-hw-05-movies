import PropTypes from 'prop-types';
import {useLocation } from "react-router-dom";
import { ListMovies, Movie, MovieLink } from './MovieList.styled';
import {HiFilm} from "react-icons/hi";
import { Container } from 'components/MovieInfo/MovieInfo.styled';

export const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
      <Container>
         <ListMovies>
            {movies.map((movie => 
              
                <Movie key={movie.id}>
                <HiFilm size='22' />
                <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                  </MovieLink>
                </Movie>
            ))}
        </ListMovies>
      </Container>
       
    )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
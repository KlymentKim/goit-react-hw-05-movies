import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FetchSearch } from 'components/Api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Container, Input } from 'components/Layout/Layout.styled';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const quary = searchParams.get('quary') ?? '';

    useEffect(() => {
        setStatus(true)
        FetchSearch(quary)
            .then(data => {
                setMovies(data.results);
            })
            .catch(err => {
                setMovies([])
                setError(String(err));
                
            })
            .finally(() => {
                setStatus(false);
            })
    }, [quary])

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const quary = evt.currentTarget.elements.input.value.trim();
        setSearchParams(quary ? { quary } : {});
    }

    return (
        <Container>
            <main>
                <form autoComplete="off" onSubmit={onFormSubmit}>
                    <Input type="search" name="input" placeholder='searching'/>
                    {/* <button><HiSearch size="12" /></button> */}
                </form>
                {isLoading && <Loader />}
                {error && <span>{error}</span>}
                <MovieList movies={movies}></MovieList>
            </main>   
        </Container>
       
    )
};

export default Movies;
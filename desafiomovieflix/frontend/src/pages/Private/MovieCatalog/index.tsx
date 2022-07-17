import { AxiosRequestConfig } from 'axios';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import MovieList from 'components/MovieList';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { MovieG } from 'types/movieg';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

type ControlComponentsData = {
  filterData: MovieFilterData;
}

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();
 
  const [movie, setMovie] = useState<SpringPage<MovieG>>();

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { genre: null }
  });

  const handleSubmitFilter = ( data : MovieFilterData) => {
    setControlComponentsData({filterData: data})
  }

  const getMovies = useCallback (( pagenNumber : number ) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: pagenNumber,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id
      }
    } 
    
    requestBackend(config)
    .then((response) => {
      setMovie(response.data);
      setPage(response.data)
    });
  }, [controlComponentsData])

  useEffect (() => {
    getMovies(0);
  }, [getMovies]);

  return (
    <div className="moviecatalog-container">
      <div className="moviecatalog-card">
          <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {movie?.content.map( movie => (
          <div key={movie.id} className="col-sm-6 col-xl-3"> 
            <MovieList movieg={movie} />
          </div>
        ))}
      </div>

      <Pagination 
        pageCount={ (page) ? page.totalPages : 0}
        range={3}
        onChange={getMovies}
      />
      
      <div className="moviecatalog-content">
        <Link to="/movies/1">
          <h5>Acessar /movies/1</h5>
        </Link>
      </div>
      <div className="moviecatalog-content">
        <Link to="/movies/2">
          <h5>Acessar /movies/2</h5>
        </Link>
      </div>
    </div>
  );
};

export default MovieCatalog;

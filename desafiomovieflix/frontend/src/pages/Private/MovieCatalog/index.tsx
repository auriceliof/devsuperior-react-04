import { AxiosRequestConfig } from 'axios';
import MovieFilter from 'components/MovieFilter';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieG } from 'types/movieg';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

const MovieCatalog = () => {
 
  const [movie, setMovie] = useState<SpringPage<MovieG>>();

  useEffect (() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 4,
      }
    } 
    
    requestBackend(config)
    .then((response) => {
      setMovie(response.data);
    });    
  }, []);

  return (
    <div className="moviecatalog-container">
      <div className="moviecatalog-card">
          <MovieFilter />
      </div>
      <div className="row">
        {movie?.content.map( movie => (
          <div key={movie.id} className="col-sm-6 col-xl-3"> 
            <MovieList movieg={movie} />
          </div>
        ))}
      </div>
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

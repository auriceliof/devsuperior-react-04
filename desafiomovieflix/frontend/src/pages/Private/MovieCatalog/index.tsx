import { AxiosRequestConfig } from 'axios';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieG } from 'types/movieg';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

type ControlComponentsData = {
  filterData: MovieFilterData;
}

const MovieCatalog = () => {
 
  const [movie, setMovie] = useState<SpringPage<MovieG>>();

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { genre: null }
  });

  const handleSubmitFilter = ( data : MovieFilterData) => {
    setControlComponentsData({filterData: data})
  }

  useEffect (() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id
      }
    } 
    
    requestBackend(config)
    .then((response) => {
      setMovie(response.data);
    });    
  }, [controlComponentsData.filterData.genre?.id]);

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

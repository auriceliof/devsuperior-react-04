import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Genre } from 'types/genre'
import { BASE_URL, requestBackend } from 'utils/requests';
import './styles.css';

const MovieFilter = () => {
 
  const [ selectGenre, setSelectGenre ] = useState<Genre[]>([]);

  useEffect( () => {

    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/genres`,
      withCredentials: true,
    }

    requestBackend(config)
    .then( response => {
      setSelectGenre( response.data)
    })
  }, [])

  return (
    <div className="base-card moviefilter-container">
      <form action="" className="moviefilter-form">
        <div className="moviefilter-category-">
          <Select 
            options={selectGenre} 
            classNamePrefix="moviefilter-select"
            getOptionLabel={ ( genre: Genre ) => genre.name }
            getOptionValue={ ( genre: Genre ) => String(genre.id) }
          />
        </div>
      </form>
    </div>
  );
};
export default MovieFilter;

import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre'
import { BASE_URL, requestBackend } from 'utils/requests';
import './styles.css';

  export type MovieFilterData = {
    genre: Genre | null;
  }

  type Props = {
    onSubmitFilter: (data: MovieFilterData) => void;
  }
  
const MovieFilter = ( { onSubmitFilter } : Props ) => {
 
  const [ selectGenre, setSelectGenre, ] = useState<Genre[]>([]);

  const { handleSubmit, getValues, setValue, control, } = useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value : Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre : getValues('genre')
    }

    onSubmitFilter(obj);
  }

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
      <form onSubmit={handleSubmit(onSubmit)} className="moviefilter-form">
        <div className="moviefilter-category-">
          <Controller 
            name="genre"
            control={ control }
            render={({ field }) => (
              <Select
                {...field} 
                options={selectGenre}
                isClearable
                placeholder="Gênero"
                classNamePrefix="moviefilter-select"
                onChange={(value) => handleChangeGenre (value as Genre)}
                getOptionLabel={ ( genre: Genre ) => genre.name }
                getOptionValue={ ( genre: Genre ) => String(genre.id) }
              />
            )}          
          />
        </div>
      </form>
    </div>
  );
};
export default MovieFilter;

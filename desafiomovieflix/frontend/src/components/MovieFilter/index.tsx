import Select from 'react-select';
import './styles.css';

const MovieFilter = () => {
  const options = [
    { value: 'Aventura', label: 'Aventura' },
    { value: 'Ação', label: 'Ação' },
    { value: 'Terror', label: 'Terror' },
  ];

  return (
    <div className="base-card moviefilter-container">
      <form action="" className="moviefilter-form">
        <div className="moviefilter-category-">
          <Select 
            options={options} 
            classNamePrefix="moviefilter-select"
          />
        </div>
      </form>
    </div>
  );
};
export default MovieFilter;

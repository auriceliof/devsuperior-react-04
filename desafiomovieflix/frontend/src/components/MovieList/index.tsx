import { MovieG } from 'types/movieg';
import './styles.css';

type Props ={
  movieg: MovieG
}
const MovieList = ( { movieg } : Props ) => {
  return (
    <div className="base-card movielist-container">
      <div className="movielist-image">
        <img src={movieg.imgUrl} alt={movieg.title} />
      </div>
      <div className="movielist-details">
        <h4 className="movielist-title">{movieg.title}</h4>
        <h5 className="movielist-year">{movieg.year}</h5>
        <p className="movielist-description">{movieg.subTitle}</p>
      </div>
    </div>
  );
};
export default MovieList;

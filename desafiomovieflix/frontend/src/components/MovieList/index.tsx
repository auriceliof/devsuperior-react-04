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
        <div className="movielist-title">{movieg.title}</div>
        <div className="movielist-year">{movieg.year}</div>
        <div className="movielist-description">{movieg.subTitle}</div>
      </div>
    </div>
  );
};
export default MovieList;

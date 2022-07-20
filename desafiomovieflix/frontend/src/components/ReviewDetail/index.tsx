import { MovieG } from 'types/movieg';
import './styles.css';

type Props ={
  movieg: MovieG
};

const ReviewDetail = ( { movieg } : Props ) => {
  return (
    <div className="base-card reviewdetail-container">
      <div className="reviewdetail-image">
        <img src={movieg.imgUrl} alt={movieg.title} />
      </div>
      <div className="reviewdetail-details">
        <div className="reviewdetail-title">{movieg.title}</div>
        <div className="reviewdetail-year">{movieg.year}</div>
        <div className="reviewdetail-description">{movieg.subTitle}</div>
        <div className="reviewdetail-synopsis">{movieg.synopsis}</div>
      </div>
    </div>
  );
};
export default ReviewDetail;

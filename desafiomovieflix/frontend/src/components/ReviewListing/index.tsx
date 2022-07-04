import { Review } from 'types/review';
import { ReactComponent as Star } from 'assets/images/star.svg';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="base-card reviewlisting-card">
      <div className="reviewlisting-container">
        {reviews?.map((review) => (
          <div className="content-reviews" key={review.id}>
            <div className="reviewlisting-content">
              <div className="reviewlisting-star">              
                  <Star />
              </div>
              <div className="reviewlisting-user">
                <h4>{review.user.name}</h4>
              </div>
            </div>
            <div className="reviewlisting-review">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewListing;

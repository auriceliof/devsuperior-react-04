import { AxiosRequestConfig } from 'axios';
import ReviewDetail from 'components/ReviewDetail';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieG } from 'types/movieg';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetail = () => {
  
  const { movieId } = useParams<urlParams>();
  
  const [ reviews, setReviews ] = useState<Review[]>([]);
  
  const [ movie, setMovie ] = useState<MovieG>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  } 

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-card-movie">

        <div>
            {movie ? <ReviewDetail movieg={movie}/> : null}
        </div>

        <div>
          {hasAnyRoles(['ROLE_MEMBER']) && (
              <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
          )}
        </div>

        <div>
          <ReviewListing reviews={reviews}/>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

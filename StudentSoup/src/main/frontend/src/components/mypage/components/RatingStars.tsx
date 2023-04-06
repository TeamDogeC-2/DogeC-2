import React from 'react';
import { ReactComponent as ReviewStarIcon } from '../../../img/mypageReviewStar.svg';
import './ratingStars.scss';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);

  return (
    <div className="rating-stars">
      {filledStars.map(index => (
        <ReviewStarIcon
          key={index}
          className="rating-star filled"
          style={{ width: '11px', height: '11px' }}
        />
      ))}
      {emptyStars.map(index => (
        <ReviewStarIcon
          key={index}
          className="rating-star empty"
          style={{ width: '11px', height: '11px' }}
        />
      ))}
    </div>
  );
};

export default RatingStars;

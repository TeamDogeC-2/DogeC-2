import React from 'react';
import { ReactComponent as ReviewStarIcon } from '../../../img/mypageReviewStar.svg';
import './ratingStars.scss';

interface RatingStarsProps {
  rating: number;
  width?: string;
  height?: string;
  color?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  width = '11px',
  height = '11px',
  color = '#ff611d',
}) => {
  const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);

  return (
    <div className="rating-stars" style={{ '--filled-color': color } as React.CSSProperties}>
      {filledStars.map(index => (
        <ReviewStarIcon key={index} className="rating-star filled" style={{ width, height }} />
      ))}
      {emptyStars.map(index => (
        <ReviewStarIcon key={index} className="rating-star empty" style={{ width, height }} />
      ))}
    </div>
  );
};

export default RatingStars;

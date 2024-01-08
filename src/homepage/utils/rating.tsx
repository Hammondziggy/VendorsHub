// Rating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface RatingProps {
  rating: number;
  style?: string; 
  group?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, style, group }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const filledStar = i < Math.floor(rating);
    const halfStar = i === Math.floor(rating) && rating % 1 !== 0;

    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={halfStar ? faStarHalfAlt : filledStar ? faStar : ['far', 'star']}
        className={`text-yellow ${style}`}
      />
    );
  }

  return <div className={`flex ${group}`}>{stars}</div>;
};

export default Rating;

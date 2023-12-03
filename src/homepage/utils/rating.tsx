'use client';

// Rating.js
import React from 'react';

interface RatingProps {
  rating: number; 
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex ml-2">
      {Array.from({ length: 5 }).map((_, i) => {
        const filledStar = i < Math.floor(rating);
        const halfStar = i === Math.floor(rating) && rating % 1 !== 0;

        return (
          <img
            key={i}
            src={`./svg/star_rating${filledStar ? '-filled' : ''}${halfStar ? '-half' : ''}.svg`}
            alt="star"
            className="h-3 w-3"
          />
        );
      })}
    </div>
  );
};

export default Rating;


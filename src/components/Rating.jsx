import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Rating = ({ rate, count }) => {
  let filledStars = Math.floor(rate);
  let hasHalfStar = rate - filledStars >= 0.5;

  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        // Filled star
        stars.push(<FaStar key={i} className="checked" color={"#ffc107"} />);
      } else if (hasHalfStar) {
        // Half-filled star
        stars.push(<FaStarHalf key={i} className="checked" color={"#ffc107"} />);
        hasHalfStar = false;
      } else {
        // Empty star
        stars.push(<FaStar key={i} color={"#222"} />);
      }
    }

    return stars;
  };

  return (
    <div className="rating my-3">
      {renderStars()}
      <span className="count">({count} reviews)</span>
    </div>
  );
};

export default Rating;

import React from 'react';
import PropTypes from 'prop-types';

const STARS_COUNT = 5;

function Rating({className, rating}) {
  const percentageRating = 100 / STARS_COUNT * rating;

  return (
    <div className={`rating__stars ${className}`}>
      <span style={{width: `${percentageRating}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

Rating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default Rating;

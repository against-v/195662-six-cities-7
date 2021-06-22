import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

function OfferCardFavorites(props) {
  const {className = '', ...restProps} = props;

  return (
    <OfferCard
      className={`favorites__card ${className}`}
      imageWrapperClassName={'favorites__image-wrapper'}
      imageWidth={'150'}
      imageHeight={'110'}
      {...restProps}
    />
  );
}

OfferCardFavorites.propTypes = {
  className: PropTypes.string,
};

export default OfferCardFavorites;

import React, { useState } from 'react';

import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import cardOfferProp from '../offer-card/offer-card.prop';

function OffersList({offers, className}) {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className={`places__list ${className}`}>
      <span hidden>{activeCard}</span>
      {
        offers.map((item) => (
          <OfferCard
            key={item.id}
            offer={item}
            mouseEventHandler={(cardValue) => setActiveCard(cardValue)}
          />
        ))
      }
    </div>
  );
}

OffersList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export default OffersList;

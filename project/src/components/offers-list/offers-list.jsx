import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';
import cardOfferProp from '../offer-card/offer-card.prop';
import {setActiveCardId} from '../../store/action';

function OffersList(props) {
  const {
    offers,
    className,
    disabledHandleSetActiveCardId,
  } = props;

  const dispatch = useDispatch();
  const handleSetActiveCardId = (activeCard) => {
    if (disabledHandleSetActiveCardId) {
      return;
    }
    dispatch(setActiveCardId(activeCard));
  };

  return (
    <div className={`places__list ${className}`}>
      {
        offers.map((item) => (
          <OfferCard
            key={item.id}
            offer={item}
            mouseEventHandler={(cardValue) => handleSetActiveCardId(cardValue)}
          />
        ))
      }
    </div>
  );
}

OffersList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  disabledHandleSetActiveCardId: PropTypes.bool,
};

export default OffersList;

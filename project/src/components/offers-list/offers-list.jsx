import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';
import cardOfferProp from '../offer-card/offer-card.prop';
import {setActiveCardId} from '../../store/action';

function OffersList(props) {
  const {
    offers,
    className,
    handleSetActiveCardId,
  } = props;
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

const mapDispatchToProp = (dispatch) => ({
  handleSetActiveCardId(activeCard) {
    dispatch(setActiveCardId(activeCard));
  },
});

OffersList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  handleSetActiveCardId: PropTypes.func.isRequired,
};

export {OffersList};
export default connect(null, mapDispatchToProp)(OffersList);

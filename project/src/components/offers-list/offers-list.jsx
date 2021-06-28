import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';
import cardOfferProp from '../offer-card/offer-card.prop';
import {ActionCreator} from '../../store/action';

function OffersList(props) {
  const {
    offers,
    className,
    setActiveCardId,
  } = props;
  return (
    <div className={`places__list ${className}`}>
      {
        offers.map((item) => (
          <OfferCard
            key={item.id}
            offer={item}
            mouseEventHandler={(cardValue) => setActiveCardId(cardValue)}
          />
        ))
      }
    </div>
  );
}

const mapDispatchToProp = (dispatch) => ({
  setActiveCardId(activeCard) {
    dispatch(ActionCreator.setActiveCardId(activeCard));
  },
});

OffersList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  setActiveCardId: PropTypes.func.isRequired,
};

export {OffersList};
export default connect(null, mapDispatchToProp)(OffersList);

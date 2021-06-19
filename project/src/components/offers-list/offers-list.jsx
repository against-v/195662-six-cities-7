import React, { useState } from 'react';

import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import cardOfferProp from '../offer-card/offer-card.prop';

function OffersList({offersCount, offers}) {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam {activeCard}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"> Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
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
    </section>
  );
}

OffersList.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export default OffersList;

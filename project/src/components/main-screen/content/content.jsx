import React from 'react';
import {useSelector} from 'react-redux';

import Sorting from '../../sorting/sorting';
import OffersList from '../../offers-list/offers-list';
import InteractiveMap from '../../interactive-map/interactive-map';
import {getOffersByCurrentCity, getSortedOffers} from '../../../store/offer/selectors';
import {getCity} from '../../../store/other/selectors';

function Content() {
  const city = useSelector(getCity);
  const offers = useSelector(getOffersByCurrentCity);
  const sortedOffers = useSelector(getSortedOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <Sorting/>
          <OffersList
            className="cities__places-list tabs__content"
            offers={sortedOffers}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <InteractiveMap
              points={offers}
              defaultLocation={city.location}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Content;

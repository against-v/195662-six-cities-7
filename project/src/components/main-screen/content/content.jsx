import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Sorting from '../../sorting/sorting';
import OffersList from '../../offers-list/offers-list';
import InteractiveMap from '../../interactive-map/interactive-map';
import cardOfferProp from '../../offer-card/offer-card.prop';
import sortTypeProp from '../../sorting/sort-type.prop';
import cityProp from '../../cities-list/city.prop';
import {sortOffers} from '../../../utils';

function Content(props) {
  const {
    city,
    offers,
    sortType,
  } = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <Sorting/>
          <OffersList
            className="cities__places-list tabs__content"
            offers={sortOffers(sortType, offers)}
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

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

Content.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  sortType: sortTypeProp,
};

export {Content};
export default connect(mapStateToProps)(Content);

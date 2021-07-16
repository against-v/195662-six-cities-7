import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CitiesList from '../cities-list/cities-list';
import Content from './content/content';
import cityProp from '../cities-list/city.prop';
import cardOfferProp from '../offer-card/offer-card.prop';
import {City} from '../../const';
import EmptyContent from './empty-content/empty-content';
import {getCity} from '../../store/other/selectors';
import {getOffersByCurrentCity} from '../../store/offer/selectors';

const getMainClassName = (contentIsEmpty) => {
  const className = 'page__main page__main--index';
  return `${className} ${contentIsEmpty ? 'page__main--index-empty' : ''}`;
};

function MainScreen(props) {
  const {
    city,
    offers,
  } = props;

  const contentIsEmpty = offers.length === 0;

  return (
    <main
      className={getMainClassName(contentIsEmpty)}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList
          list={Object.values(City)}
        />
      </div>
      {
        contentIsEmpty ?
          <EmptyContent
            city={city}
          />
          :
          <Content
            city={city}
            offers={offers}
          />
      }
    </main>
  );
}

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffersByCurrentCity(state),
});

MainScreen.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

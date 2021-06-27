import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list';
import cardOfferProp from '../offer-card/offer-card.prop';
import InteractiveMap from '../interactive-map/interactive-map';
import locationProp from './location.prop';
import CitiesList from '../cities-list/cities-list';

import {sortOffers} from '../../utils';

import {City} from '../../const';
import Sorting from '../sorting/sorting';
import sortTypeProp from '../sorting/sort-type.prop';

function MainScreen(props) {
  const {
    city,
    offers,
    sortType,
  } = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            list={Object.values(City)}
          />
        </div>
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
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers.filter((item) => item.city === state.city.name),
  sortType: state.sortType,
});

MainScreen.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: locationProp,
  }),
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  sortType: sortTypeProp,
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CitiesList from '../cities-list/cities-list';
import Content from './content/content';
import cityProp from '../cities-list/city.prop';
import cardOfferProp from '../offer-card/offer-card.prop';
import {City} from '../../const';
import EmptyContent from './empty-content/empty-content';

function MainScreen(props) {
  const {
    city,
    offers,
  } = props;

  const contentIsEmpty = offers.length === 0;

  const getMainClassName = () => {
    const className = 'page__main page__main--index';
    return `${className} ${contentIsEmpty ? 'page__main--index-empty' : ''}`;
  };

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

      <main
        className={getMainClassName()}
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers.filter((item) => item.city === state.city.name),
});

MainScreen.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import cardOfferProp from '../offer-card/offer-card.prop';
import {AppRoute} from '../../const';

function Page(props) {
  const {
    offers,
  } = props;

  const location = useLocation();

  const setPageClassName = (path) => {
    const className = 'page';
    switch (path) {
      case AppRoute.ROOT:
        return `${className} page--gray page--main`;
      case AppRoute.LOGIN:
        return `${className} page--gray page--login`;
      default:
        return className;
    }
  };

  const pageClassName = setPageClassName(location.pathname);

  return (
    <div className={pageClassName}>
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
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </div>
  );
}

Page.propTypes = {
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export default Page;

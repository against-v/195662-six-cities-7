import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import cardOfferProp from '../offer-card/offer-card.prop';
import {AppRoute} from '../../const';
import Header from '../header/header';

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
      <Header/>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesScreen offers={offers}/>
          )}
        >
        </PrivateRoute>
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

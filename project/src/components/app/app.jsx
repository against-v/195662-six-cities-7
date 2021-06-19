import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import cardOfferProp from '../offer-card/offer-card.prop';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({offersCount, offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            offersCount={offersCount}
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
    </BrowserRouter>
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
};

export default App;

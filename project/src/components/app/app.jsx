import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import cardOfferProp from '../offer-card/offer-card.prop';
import browserHistory from '../../browser-history';

import Preloader from '../preloader/preloader';
import Page from '../page/page';
import {AuthorizationStatus} from '../../const';
import {getOffers, getOffersAreLoaded} from '../../store/offer/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App(props) {
  const {
    offers,
    offersAreLoaded,
    authorizationStatus,
  } = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN && !offersAreLoaded) {
    return (
      <Preloader/>
    );
  }
  return (
    <BrowserRouter
      history={browserHistory}
    >
      <Page
        offers={offers}
      />
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  offersAreLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offersAreLoaded: getOffersAreLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import cardOfferProp from '../offer-card/offer-card.prop';

import Preloader from '../preloader/preloader';
import Page from '../page/page';

function App(props) {
  const {
    offers,
    offersAreLoaded,
  } = props;

  if (!offersAreLoaded) {
    return (
      <Preloader/>
    );
  }
  return (
    <BrowserRouter>
      <Page
        offers={offers}
      />
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(cardOfferProp).isRequired,
  offersAreLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offersAreLoaded: state.offersAreLoaded,
});

export {App};
export default connect(mapStateToProps)(App);

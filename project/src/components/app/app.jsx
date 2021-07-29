import React from 'react';
import {useSelector} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import Preloader from '../preloader/preloader';
import Page from '../page/page';
import {AuthorizationStatus} from '../../const';
import {getOffers, getOffersAreLoaded} from '../../store/offer/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {
  const offers = useSelector(getOffers);
  const offersAreLoaded = useSelector(getOffersAreLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !offersAreLoaded) {
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

export default App;

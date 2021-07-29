import React from 'react';

import EmptyContent from './empty-content/empty-content';
import Content from './content/content';
import {useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../store/offer/selectors';

function FavoritesScreen() {
  const offers = useSelector(getFavoriteOffers);
  const contentIsEmpty = offers.length === 0;

  return (
    <React.Fragment>
      <main
        className={`${contentIsEmpty ? 'page__main--favorites-empty' : ''} page__main page__main--favorites`}
      >
        <div className="page__favorites-container container">
          {
            contentIsEmpty ?
              <EmptyContent/>
              :
              <Content/>
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </React.Fragment>
  );
}

export default FavoritesScreen;

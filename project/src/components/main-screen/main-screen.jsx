import React from 'react';
import {useSelector} from 'react-redux';

import CitiesList from '../cities-list/cities-list';
import Content from './content/content';
import {City} from '../../const';
import EmptyContent from './empty-content/empty-content';
import {getCity} from '../../store/other/selectors';
import {getOffersByCurrentCity} from '../../store/offer/selectors';

const getMainClassName = (contentIsEmpty) => {
  const className = 'page__main page__main--index';
  return `${className} ${contentIsEmpty ? 'page__main--index-empty' : ''}`;
};

function MainScreen() {
  const city = useSelector(getCity);
  const offers = useSelector(getOffersByCurrentCity);
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

export default MainScreen;

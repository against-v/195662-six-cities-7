import React from 'react';
import OfferCardFavorites from '../../offer-card-favorites/offer-card-favorites';
import {useSelector} from 'react-redux';
import {getFavoriteOffersByCity} from '../../../store/offer/selectors';

function Content() {
  const offersByCity = useSelector(getFavoriteOffersByCity);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          offersByCity.map((item) => (
            <li
              key={item.city}
              className="favorites__locations-items"
            >
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/">
                    <span>{item.city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  item.offers.map((offer) => (
                    <OfferCardFavorites
                      key={offer.id}
                      offer={offer}
                    />
                  ))
                }
              </div>
            </li>
          ))
        }

      </ul>
    </section>
  );
}

export default Content;

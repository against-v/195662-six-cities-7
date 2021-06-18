import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import cardOfferProp from './offer-card.prop';

const STARS_COUNT = 5;

function OfferCard({offer, mouseEventHandler, isHorizontal}) {
  const {
    id,
    isPremium,
    isFavorite,
    images,
    title,
    price,
    rating,
    type,
  } = offer;
  const image = images[0];
  const percentageRating = 100 / STARS_COUNT * rating;

  const handleMouseEvent = (cardValue) => {
    if (mouseEventHandler) {
      mouseEventHandler(cardValue);
    }
  };

  return (
    <article
      className={`${isHorizontal ? "favorites__card" : "cities__place-card"} place-card`}
      onMouseEnter={() => handleMouseEvent(id)}
      onMouseLeave={() => handleMouseEvent(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${isHorizontal ? "favorites__image-wrapper" : "cities__image-wrapper"} place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={`img/${image}`}
            width={isHorizontal ? "150" : "260"}
            height={isHorizontal ? "110" : "200"}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${isFavorite ? "place-card__bookmark-button--active" : ""} place-card__bookmark-button button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${percentageRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: cardOfferProp,
  mouseEventHandler: PropTypes.func,
  isHorizontal: PropTypes.bool,
};
OfferCard.de


export default OfferCard;

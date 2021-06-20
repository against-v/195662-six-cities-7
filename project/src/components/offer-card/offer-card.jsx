import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';

import PropTypes from 'prop-types';
import cardOfferProp from './offer-card.prop';
import Rating from '../rating/rating';

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

  const handleMouseEvent = (cardValue) => {
    if (mouseEventHandler) {
      mouseEventHandler(cardValue);
    }
  };

  return (
    <article
      className={`${isHorizontal ? 'favorites__card' : 'cities__place-card'} place-card`}
      onMouseEnter={() => handleMouseEvent(id)}
      onMouseLeave={() => handleMouseEvent(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${isHorizontal ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}
      >
        <Link to={generatePath(AppRoute.OFFER, {id})}>
          <img
            className="place-card__image"
            src={`img/${image}`}
            width={isHorizontal ? '150' : '260'}
            height={isHorizontal ? '110' : '200'}
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
            className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating
            className="place-card__stars"
            rating={rating}
          />
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.OFFER, {id})}>{title}</Link>
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

export default OfferCard;

import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import CommentsList from '../comments-list/comments-list';
import InteractiveMap from '../interactive-map/interactive-map';
import {getOffer} from '../../store/api-actions';

import OffersList from '../offers-list/offers-list';
import Preloader from '../preloader/preloader';
import offerProp from '../offer-card/offer-card.prop';
import {ActionCreator} from '../../store/action';
import Rating from '../rating/rating';

function OfferScreen(props) {
  const {
    getData,
    resetData,
    offer,
    comments,
    nearbyOffers,
  } = props;

  const {id} = useParams();

  useEffect(() => {
    getData(id);
    return () => {
      resetData();
    };
  }, [getData, id, resetData]);

  if (!offer) {
    return (
      <Preloader/>
    );
  }

  const {
    title,
    images,
    isPremium,
    rating,
    type,
    bedroomCount,
    adultMaxCount,
    price,
    goods,
    description,
    host,
    cityLocation,
  } = offer;

  const getAvatarWrapperClassName = (status) => {
    const defaultClassName = 'property__avatar-wrapper  user__avatar-wrapper';
    return status ? `${defaultClassName} property__avatar-wrapper--pro` : defaultClassName;
  };

  const avatarWrapperClassName = getAvatarWrapperClassName(host.isPro);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, 6).map((item) => (
              <div
                key={item}
                className="property__image-wrapper"
              >
                <img className="property__image" src={item} alt="Studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <Rating
                className="property__stars"
                rating={rating}
              />
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedroomCount > 1 ? `${bedroomCount} bedrooms` : '1 bedroom'}
              </li>
              <li className="property__feature property__feature--adults">
                Max {adultMaxCount} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item) => (
                  <li
                    key={item}
                    className="property__inside-item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div
                  className={avatarWrapperClassName}
                >
                  <img
                    className="property__avatar user__avatar"
                    src={host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro && (
                  <span className="property__user-status">
                    Pro
                  </span>
                )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <CommentsList
              comments={comments}
            />
          </div>
        </div>
        <section className="property__map map">
          <InteractiveMap
            points={nearbyOffers}
            defaultLocation={cityLocation}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList
            className="near-places__list places__list"
            offers={nearbyOffers}
          />
        </section>
      </div>
    </main>
  );
}

const mapDispatchToProps  = (dispatch) => ({
  getData(id) {
    dispatch(getOffer(id));
  },
  resetData() {
    dispatch(ActionCreator.resetOffer());
  },
});

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  comments: state.comments,
});

OfferScreen.propTypes = {
  getData: PropTypes.func,
  resetData: PropTypes.func,
  offer: offerProp,
  nearbyOffers: PropTypes.arrayOf(offerProp),
};

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);

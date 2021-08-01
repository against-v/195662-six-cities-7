import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CommentsList from '../comments-list/comments-list';
import InteractiveMap from '../interactive-map/interactive-map';
import {getOffer} from '../../store/api-actions';
import OffersList from '../offers-list/offers-list';
import Preloader from '../preloader/preloader';
import {resetOffer, setActiveCardId} from '../../store/action';
import Rating from '../rating/rating';
import {sortComments} from '../../utils';
import {getComments, getNearbyOffers, getOffer as getCurrentOffer} from '../../store/offer/selectors';
import {useParams} from 'react-router-dom';
import {useFavoriteButton} from '../../hooks/use-favorite-button/use-favorite-button';

const getAvatarWrapperClassName = (status) => {
  const defaultClassName = 'property__avatar-wrapper  user__avatar-wrapper';
  return status ? `${defaultClassName} property__avatar-wrapper--pro` : defaultClassName;
};

const getActualComments = (comments) => sortComments(comments).slice(0, 10);

function OfferScreen() {
  const offer = useSelector(getCurrentOffer);
  const nearbyOffers = useSelector(getNearbyOffers);

  const offersOnMap = [offer].concat(nearbyOffers);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const {id} = useParams();
  const [handleToggleFavoriteStatus, isFavorite] = useFavoriteButton(Number(id));
  useEffect(() => {
    dispatch(getOffer(id));
    dispatch(setActiveCardId(Number(id)));
    return () => {
      dispatch(resetOffer());
      dispatch(setActiveCardId(null));
    };
  }, [id, dispatch]);

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
              <button
                className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`}
                type="button"
                onClick={(e) => handleToggleFavoriteStatus(e)}
              >
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
              commentsCount={comments.length}
              comments={getActualComments(comments)}
            />
          </div>
        </div>
        <section className="property__map map">
          <InteractiveMap
            points={offersOnMap}
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
            disabledHandleSetActiveCardId
          />
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;

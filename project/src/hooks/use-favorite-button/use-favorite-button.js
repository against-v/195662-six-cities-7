import {AppRoute, AuthorizationStatus} from '../../const';
import {toggleFavoriteStatus} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getFavoriteOffers} from '../../store/offer/selectors';

export const useFavoriteButton = (id) => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const favoriteList = useSelector(getFavoriteOffers);

  const currentStatus = Boolean(favoriteList.find((item) => item.id === id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      const newFavoriteStatus = currentStatus ? 0 : 1;
      dispatch(toggleFavoriteStatus(id, newFavoriteStatus));
    } else {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
  };

  return [handleSubmit, currentStatus];
};

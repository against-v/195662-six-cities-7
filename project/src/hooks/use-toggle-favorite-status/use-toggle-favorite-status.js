import {AppRoute, AuthorizationStatus} from '../../const';
import {toggleFavoriteStatus} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

export const useToggleFavoriteStatus = () => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleSubmit = (e, id, isFavorite) => {
    e.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      const newFavoriteStatus = !isFavorite ? 1 : 0;
      dispatch(toggleFavoriteStatus(id, newFavoriteStatus));
    } else {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
  };
  return [handleSubmit];
};

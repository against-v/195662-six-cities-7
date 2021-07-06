import {ActionCreator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';

export const getOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
    });
};

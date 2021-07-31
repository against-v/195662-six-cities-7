import {
  loadOffers,
  loadFavoriteOffers,
  loadOffer,
  redirectToRoute,
  setUser,
  requireAuthorization,
  logout as closeSession,
  loadComments,
  setCommentFormIsLoading,
  setCommentFormError,
  updateFavoriteList,
  showNotificationModal,
  resetFavoriteOffers
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus, HttpStatus, Notification} from '../const';

const handleSuccessAuth = (api, dispatch, userData) => {
  dispatch(setUser(userData));
  api.get(APIRoute.FAVORITE).then(({data}) => {
    dispatch(loadFavoriteOffers(data));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  });
};

export const getOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(data)));
};

export const getOffer = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`${APIRoute.HOTELS}/${id}`),
    api.get(`${APIRoute.HOTELS}/${id}/nearby`),
    api.get(`${APIRoute.COMMENTS}/${id}`),
  ]).then((res) => {
    const [offer, nearbyOffers, comments] =  res.map((item) => item.data);
    dispatch(loadOffer({
      offer,
      nearbyOffers,
      comments,
    }));
  }).catch(({response}) => {
    const {status} = response;
    if (status === HttpStatus.BAD_REQUEST || status === HttpStatus.NOT_FOUND) {
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
    }
  });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      handleSuccessAuth(api, dispatch, data);
    })
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      handleSuccessAuth(api, dispatch, data);
    })
    .catch((error) => {
      if (error.response.status === HttpStatus.BAD_REQUEST) {
        dispatch(showNotificationModal(Notification.INVALID_EMAIL));
      }
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(closeSession());
      dispatch(resetFavoriteOffers());
      dispatch(redirectToRoute(AppRoute.ROOT));
    });
};

export const createComment = (id, payload) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.COMMENTS}/${id}`, payload)
    .then(({data}) => {
      dispatch(loadComments(data));
      dispatch(setCommentFormIsLoading(false));
    })
    .catch((error) => {
      dispatch(setCommentFormError(error.response.data.error));
      dispatch(showNotificationModal(error.response.data.error));
      dispatch(setCommentFormIsLoading(false));
    });
};

export const toggleFavoriteStatus = (id, value) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${id}/${value}`)
    .then((res) => {
      dispatch(updateFavoriteList(res.data));
    });
};


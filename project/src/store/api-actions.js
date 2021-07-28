import {
  loadOffers,
  loadOffer,
  redirectToRoute,
  setUser,
  requireAuthorization,
  logout as closeSession,
  loadComments,
  setCommentFormIsLoading,
  setCommentFormError,
  updateOffer
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus, HttpStatus} from '../const';

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
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(AppRoute.ROOT));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(closeSession());
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
      dispatch(setCommentFormIsLoading(false));
    });
};

export const toggleFavoriteStatus = (id, value) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${id}/${value}`)
    .then((res) => {
      dispatch(updateOffer(res.data));
    });
};

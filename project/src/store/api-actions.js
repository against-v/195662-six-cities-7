import {ActionCreator} from './action';
import {APIRoute} from '../const';

export const getOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.HOTELS).then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};

import {combineReducers} from 'redux';
import {user} from './user/user';
import {offer} from './offer/offer';
import {other} from './other/other';

export const NameSpace = {
  USER: 'USER',
  OFFER: 'OFFER',
  OTHER: 'OTHER',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.OFFER]: offer,
  [NameSpace.OTHER]: other,
});

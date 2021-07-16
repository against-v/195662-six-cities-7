import {combineReducers} from 'redux';
import {user} from './user/user';
import {offer} from './offer/offer';
import {comment} from './comment/comment';
import {other} from './other/other';

export const NameSpace = {
  USER: 'USER',
  OFFER: 'OFFER',
  COMMENT: 'COMMENT',
  OTHER: 'OTHER',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.OFFER]: offer,
  [NameSpace.COMMENT]: comment,
  [NameSpace.OTHER]: other,
});

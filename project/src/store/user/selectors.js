import {NameSpace} from '../root-reducer';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getIsAuthorized = (state) => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;
export const getUserEmail = (state) => state[NameSpace.USER].user.email;

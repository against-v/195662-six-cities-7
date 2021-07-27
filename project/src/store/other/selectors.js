import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.OTHER].city;
export const getSortType = (state) => state[NameSpace.OTHER].sortType;
export const getActiveCardId = (state) => state[NameSpace.OTHER].activeCardId;

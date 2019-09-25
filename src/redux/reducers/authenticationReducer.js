import { initialState } from '../initialState';
import * as types from '../constants/actionType';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload.data,
      };
    case types.USER_REGISTER_REQUEST:
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
};

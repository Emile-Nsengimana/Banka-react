import { initialState } from '../initialState';
import * as types from '../constants/actionType';

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_ACCOUNTS:
    {
      const { data } = action.payload;
      return {
        ...state,
        userAccounts: [...data],
      };
    }

    case types.FETCH_ACCOUNT_TRANSACTION_REQUEST: {
      return {
        ...state,
        transactions: action.payload.history,
      };
    }


    default:
      return state;
  }
};

import { toast } from 'react-toastify';
import api from '../../utils/api';
import * as types from '../constants/actionType';

export const getUserAccounts = (email) => async (dispatch) => {
  try {
    const request = await api.useGetOrDelete('get', `/api/v2/user/${email}/accounts`);
    if (request.status === 200) {
      dispatch({
        type: types.FETCH_USER_ACCOUNTS,
        payload: request,
      });
    }
  } catch (error) {
    toast.error(error.response.data.error || error.response.data.message);
  }
};

export const getTransactionHistory = (accountNo) => async (dispatch) => {
  try {
    const request = await api.useGetOrDelete('get', `/api/v2/accounts/${accountNo}/transactions`);
    if (request.status === 200) {
      dispatch({
        type: types.FETCH_ACCOUNT_TRANSACTION_REQUEST,
        payload: request.data,
      });
    }
  } catch (error) {
    toast.warn(error.response.data.error || error.response.data.message);
  }
};

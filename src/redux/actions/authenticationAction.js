import { toast } from 'react-toastify';
import api from '../../utils/api';
import * as types from '../constants/actionType';

export const userLogin = (data) => async (dispatch) => {
  try {
    const request = await api.usePostOrPut('post', '/api/v2/auth/signin', data);
    if (request.status === 200) {
      sessionStorage.setItem('token', request.data.data.token);
      sessionStorage.setItem('email', request.data.data.email);
      dispatch({
        type: types.USER_LOGIN_REQUEST,
        payload: request.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.error || error.response.data.message);
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const request = await api.usePostOrPut('post', '/api/v2/auth/signup', data);
    if (request.status === 201) {
      dispatch({
        type: types.USER_REGISTER_REQUEST,
        payload: request.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.error || error.response.data.message);
  }
};

/* eslint-disable no-debugger */
// import $ from 'jquery';
import axios from '../../../utils/request';
import store from '../../../store/store';
import { API_URL } from '../../../utils/constant';
import { ADD_LOADER, FETCH_USER } from './type';

export const getUsersList = (params: any) => {
  store.dispatch({ type: ADD_LOADER });
  return axios.get(API_URL.userListUrl, { params }).then((res: any) => {
    if (res) {
      store.dispatch({ type: FETCH_USER, payload: res.data.res });
      return res.data.res;
    }
    return undefined;
  });
};

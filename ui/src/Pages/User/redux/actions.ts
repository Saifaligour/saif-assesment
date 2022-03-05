/* eslint-disable no-unused-vars */
// @ts-nocheck
import { toast } from 'react-toastify';
import axios from '../../../utils/request';
import { API_URL } from '../../../utils/constant';

export const SubmitForm = async (payload: any) => {
  return axios.post(API_URL.submtFormUrl, payload).then((res: any) => {
    if (res) {
      toast.success('Data added successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return res.data;
    }
    return null;
  });
};

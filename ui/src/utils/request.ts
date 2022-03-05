/* eslint-disable no-debugger */
/* eslint-disable prefer-destructuring */
import axios from 'axios';

import { toast } from 'react-toastify';
import BASE_URL from '../env/index';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

/**
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 *
 * @return {object}           The response
 */
const Axios = axios.create({
  baseURL: BASE_URL.API.URL,
});

Axios.interceptors.response.use(
  (res: any) => {
    if (res.status === 200 && res.data && res.data.status) {
      return res;
    }
    toast.error(res.data.err, {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(res);
    return undefined;
  },
  (error) => {
    console.log(error);
    debugger;
    if (error.response)
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : 'Internal server error',
        {
          position: toast.POSITION.TOP_RIGHT,
        },
      );
    else
      toast.error('Network Error', {
        position: toast.POSITION.TOP_RIGHT,
      });
    return undefined;
  },
);

export default Axios;

/* eslint-disable no-debugger */
import { FETCH_USER, ADD_LOADER, REMOVE_LOADER } from './type';

const initialState = {
  total: 0,
  loader: false,
  users: undefined,
};

export default function Reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        ...action.payload,
        loader: false,
      };
    case ADD_LOADER:
      return {
        ...state,
        loader: true,
      };
    case REMOVE_LOADER:
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
}

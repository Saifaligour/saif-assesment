import { Login } from './constant';

const initialState = {};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Login:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

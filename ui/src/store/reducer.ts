import { combineReducers } from 'redux';
import userReducer from 'Pages/User/redux/reducer';
import adminResucer from 'Pages/Admin/redux/reducer';

export default combineReducers({
  userReducer,
  adminResucer,
});

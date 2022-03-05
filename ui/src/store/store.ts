import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;

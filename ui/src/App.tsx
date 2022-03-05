import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store/store';
import Router from './routes/route';

const App = () => {
  return (
    <StrictMode>
      <ToastContainer />
      <Provider store={store}>
        <Router />
      </Provider>
    </StrictMode>
  );
};

export default App;

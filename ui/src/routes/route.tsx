/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from 'Pages/User';
import UserList from 'Pages/Admin';
import { URL } from 'utils/constant';
import Header from 'Components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={URL.Home} component={User} />
        <Route exact path={URL.Admin} component={UserList} />
      </Switch>
    </BrowserRouter>
  );
}

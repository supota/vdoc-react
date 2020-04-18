'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { store, history, persistor } from './modules/store';

import { TopPage } from './presentation/pages/Top';
import { SportsPage } from './presentation/pages/Sports';
import { PlayerPage } from './presentation/pages/Player';
import { FormPage } from './presentation/pages/Form';
import { LoginPage } from './presentation/pages/Login';
import { ConfirmationPage } from './presentation/pages/Confirmation';
import { NotFoundPage } from './presentation/pages/NotFound';

import './public/scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path="/" component={TopPage}></Route>

          <Route path="/sports/:id([0-9a-zA-Z]+)" component={SportsPage}></Route>

          <Route path="/players/:id([0-9a-zA-Z]+)" component={PlayerPage}></Route>

          <Route path="/form" component={FormPage}></Route>

          <Route path="/login" component={LoginPage}></Route>

          <Route path="/confirm" component={ConfirmationPage}></Route>

          <Route component={NotFoundPage}></Route>
        </Switch>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('wrapper'),
);

'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { store, history } from './modules/store';

import { TopPage } from './presentation/pages/Top';
import { SportsPage } from './presentation/pages/Sports';
import { PlayerPage } from './presentation/pages/Player';
import { EditPage } from './presentation/pages/Edit';
import { LoginPage } from './presentation/pages/Login';
import { ConfirmationPage } from './presentation/pages/Confirmation';
import { MyPage } from './presentation/pages/Mypage';
import { NotFoundPage } from './presentation/pages/NotFound';

import { Loading } from './presentation/organisms/Loading';

import './public/scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Loading />
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={TopPage} />

        <Route path="/sports/:id([0-9a-zA-Z]+)" component={SportsPage} />

        <Route path="/players/:id([0-9a-zA-Z]+)" component={PlayerPage} />

        <Route path="/edit" component={EditPage} />

        <Route path="/login" component={LoginPage} />

        <Route path="/confirm" component={ConfirmationPage} />

        <Route path="/mypage" component={MyPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

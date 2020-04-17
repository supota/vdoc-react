import { call, put, fork, take } from 'redux-saga/effects';

import { IRequestLogin, actions } from './actions';
import { ActionTypes } from './types';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

function* handleLogin() {
  while (true) {
    const action: IRequestLogin = yield take(ActionTypes.REQUEST_LOGIN);
    try {
      const payload = action.payload;
      const user = yield call(
        DomainProvider.authService.login,
        payload.email,
        payload.password,
      );
      yield put(actions.successLogin({ user: user }));
    } catch {
      yield put(actions.failureLogin());
    }
  }
}

export function* rootSaga() {
  yield fork(handleLogin);
}

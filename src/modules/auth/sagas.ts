import { call, put, take, all } from 'redux-saga/effects';

import { IRequestLogin, actions } from './actions';
import { ActionTypes } from './types';

import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

function* initializeAuthState() {
  try {
    const loginUser: firebase.User | null = yield call(
      DomainProvider.authService.getLoginState,
    );
    let player: Player | null = null;
    if (loginUser) {
      player = yield call(
        DomainProvider.playerRepo.getPlayer,
        new PlayerID(loginUser.uid),
      );
    }
    yield put(
      actions.initializeLogin({
        user: player,
        isLoggedIn: !!player,
      }),
    );
  } catch (e) {
    console.log(e);
    yield put(actions.failureLogin());
  }
}

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
      const player = yield call(
        DomainProvider.playerRepo.getPlayer,
        new PlayerID(user.uid),
      );
      yield put(actions.successLogin({ user: player }));
    } catch (e) {
      console.log(e);
      yield put(actions.failureLogin());
    }
  }
}
function* handleLogout() {
  while (true) {
    yield take(ActionTypes.REQUEST_LOGOUT);
    try {
      // ログアウトする
      yield call(DomainProvider.authService.logout);
      yield put(actions.successLogout());
    } catch (e) {
      console.log(e);
      yield put(actions.failureLogout());
    }
  }
}

export function* rootSaga() {
  yield all([initializeAuthState(), handleLogin(), handleLogout()]);
}

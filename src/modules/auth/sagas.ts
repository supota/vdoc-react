import { eventChannel } from 'redux-saga';
import { call, put, take, all } from 'redux-saga/effects';

import { IRequestLogin, actions } from './actions';
import { ActionTypes } from './types';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { firebase } from 'vdoc/libs/infra/firebase/firebase';

type FAuthUser = {
  user: firebase.User | null;
};
type FAuthError = {
  error: firebase.auth.Error;
};

type ChannelReceiver = FAuthUser | FAuthError;

const authChannel = () => {
  const channel = eventChannel<ChannelReceiver>(emit => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error }),
    );
    return unsubscribe;
  });
  return channel;
};

function* observeAuthState() {
  const channel: ReturnType<typeof authChannel> = yield call<
    typeof authChannel
  >(authChannel);
  while (true) {
    const result: ChannelReceiver = yield take(channel);
    if ('user' in result) {
      yield put(actions.successLogin({ user: result.user! }));
    }
    if ('error' in result) {
      yield put(actions.failureLogin());
    }
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
      yield put(actions.successLogin({ user: user }));
    } catch {
      yield put(actions.failureLogin());
    }
  }
}

export function* rootSaga() {
  yield all([handleLogin(), observeAuthState()]);
}

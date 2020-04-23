import { call, put, fork } from 'redux-saga/effects';

import { actions } from './actions';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

function* handleGetAll() {
  yield put(actions.requestGetAll());
  try {
    const sports = yield call(DomainProvider.sportsRepo.getAllSports);
    yield put(
      actions.successGetAll({
        sports: sports,
      }),
    );
  } catch (e) {
    console.log(e);
    yield put(actions.failureGetAll());
  }
}

export function* rootSaga() {
  yield fork(handleGetAll);
}

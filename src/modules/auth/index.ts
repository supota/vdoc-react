import { firebase } from 'vdoc/libs/infra/firebase/firebase';

import { actions } from './actions';
import { reducer } from './reducers';
import { rootSaga } from './sagas';
import { ActionTypes } from './types';

export interface IAuthState {
  isLoading: boolean;
  user: firebase.User | null;
  isLoggedIn: boolean;
  isError: boolean;
}

export {
  actions as authActions,
  reducer as authReducer,
  rootSaga as authRootSaga,
  ActionTypes as AuthActionTypes,
};

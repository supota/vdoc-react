import { actions } from './actions';
import { reducer } from './reducers';
import { selectors } from './selectors';
import { rootSaga } from './sagas';
import { ActionTypes } from './types';

import { Player } from 'vdoc/libs/domain/models/Player';

export interface IAuthState {
  isLoading: boolean;
  user: Player | null;
  isLoggedIn: boolean;
  isError: boolean;
}

export {
  actions as authActions,
  reducer as authReducer,
  selectors as authSelectors,
  rootSaga as authRootSaga,
  ActionTypes as AuthActionTypes,
};

import { actions } from './actions';
import { reducer } from './reducers';
import { selectors } from './selectors';
import { rootSaga } from './sagas';
import { ActionTypes } from './types';

import { Sports } from 'vdoc/libs/domain/models/Sports';

export interface ISportsListState {
  isLoading: boolean;
  isError: boolean;
  sports: Sports[];
}

export {
  actions as sportsListActions,
  reducer as sportsListReducer,
  selectors as sportsListSelectors,
  rootSaga as sportsListRootSaga,
  ActionTypes as SportsListActionTypes,
};

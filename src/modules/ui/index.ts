import { actions } from './actions';
import { reducer } from './reducers';
import { selectors } from './selectors';
import { ActionTypes } from './types';

export interface IUIState {
  isLoading: boolean;
}

export {
  actions as uiActions,
  reducer as uiReducer,
  selectors as uiSelectors,
  ActionTypes as UIActionTypes,
};

import { IUIState } from './index';
import { UIActions } from './actions';
import { ActionTypes } from './types';

const initialState: IUIState = {
  isLoading: false,
};

export const reducer = (
  state: IUIState = initialState,
  action: UIActions,
): IUIState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

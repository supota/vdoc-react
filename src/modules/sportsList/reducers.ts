import { ISportsListState } from './index';
import { SportsActions } from './actions';
import { ActionTypes } from './types';

const initialState: ISportsListState = {
  isLoading: false,
  isError: false,
  sports: [],
};

export const reducer = (
  state: ISportsListState = initialState,
  action: SportsActions,
): ISportsListState => {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_ALL:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SUCCESS_GET_ALL:
      return {
        ...state,
        isLoading: false,
        sports: action.payload.sports,
      };
    case ActionTypes.FAILURE_GET_ALL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

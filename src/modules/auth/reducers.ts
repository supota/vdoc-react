import { IState } from './index';
import { Actions } from './actions';
import { ActionTypes } from './types';

const initialState: IState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
  isError: false,
};

export const reducer = (
  state: IState = initialState,
  action: Actions,
): IState => {
  switch (action.type) {
    case ActionTypes.REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SUCCESS_LOGIN:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isLoggedIn: true,
        isError: false,
      };
    case ActionTypes.FAILURE_LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

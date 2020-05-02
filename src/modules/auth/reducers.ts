import { IAuthState } from './index';
import { AuthActions } from './actions';
import { ActionTypes } from './types';

const initialState: IAuthState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
  isError: false,
};

export const reducer = (
  state: IAuthState = initialState,
  action: AuthActions,
): IAuthState => {
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
    case ActionTypes.REQUEST_LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SUCCESS_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
        isError: false,
      };
    case ActionTypes.FAILURE_LOGOUT:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

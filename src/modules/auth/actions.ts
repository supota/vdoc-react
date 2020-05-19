import { Action } from 'redux';
import { ActionTypes } from './types';

import { Player } from 'vdoc/libs/domain/models/Player';

type IAuthAction = Action<ActionTypes>;

export interface IInitializeLogin extends IAuthAction {
  type: ActionTypes.INITIALIZE_LOGIN;
  payload: {
    isLoggedIn: boolean;
    user: Player | null;
  };
}
export interface IRequestLogin extends IAuthAction {
  type: ActionTypes.REQUEST_LOGIN;
  payload: {
    email: string;
    password: string;
  };
}
export interface ISuccessLogin extends IAuthAction {
  type: ActionTypes.SUCCESS_LOGIN;
  payload: {
    user: Player;
  };
}
export interface IFailureLogin extends IAuthAction {
  type: ActionTypes.FAILURE_LOGIN;
}
export interface IRequestLogout extends IAuthAction {
  type: ActionTypes.REQUEST_LOGOUT;
}
export interface ISuccessLogout extends IAuthAction {
  type: ActionTypes.SUCCESS_LOGOUT;
}
export interface IFailureLogout extends IAuthAction {
  type: ActionTypes.FAILURE_LOGOUT;
}
export interface IUpdateUser extends IAuthAction {
  type: ActionTypes.UPDATE_USER;
  payload: {
    newUser: Player;
  };
}

export const initializeLogin = (
  payload: IInitializeLogin['payload'],
): IInitializeLogin => ({
  type: ActionTypes.INITIALIZE_LOGIN,
  payload: payload,
});
export const requestLogin = (
  payload: IRequestLogin['payload'],
): IRequestLogin => ({
  type: ActionTypes.REQUEST_LOGIN,
  payload: payload,
});
export const successLogin = (
  payload: ISuccessLogin['payload'],
): ISuccessLogin => ({
  type: ActionTypes.SUCCESS_LOGIN,
  payload: payload,
});
export const failureLogin = (): IFailureLogin => ({
  type: ActionTypes.FAILURE_LOGIN,
});
export const requestLogout = (): IRequestLogout => ({
  type: ActionTypes.REQUEST_LOGOUT,
});
export const successLogout = (): ISuccessLogout => ({
  type: ActionTypes.SUCCESS_LOGOUT,
});
export const failureLogout = (): IFailureLogout => ({
  type: ActionTypes.FAILURE_LOGOUT,
});
export const updateUser = (payload: IUpdateUser['payload']): IUpdateUser => ({
  type: ActionTypes.UPDATE_USER,
  payload: payload,
});

export const actions = {
  initializeLogin,
  requestLogin,
  successLogin,
  failureLogin,
  requestLogout,
  successLogout,
  failureLogout,
  updateUser,
};
export type AuthActions =
  | IInitializeLogin
  | IRequestLogin
  | ISuccessLogin
  | IFailureLogin
  | IRequestLogout
  | ISuccessLogout
  | IFailureLogout
  | IUpdateUser;

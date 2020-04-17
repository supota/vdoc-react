import { firebase } from '../../libs/infra/firebase/firebase';

import { Action } from 'redux';
import { ActionTypes } from './types';

type IAuthAction = Action<ActionTypes>;

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
    user: firebase.User;
  };
}
export interface IFailureLogin extends IAuthAction {
  type: ActionTypes.FAILURE_LOGIN;
}

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

export const actions = {
  requestLogin,
  successLogin,
  failureLogin,
};
export type Actions = IRequestLogin | ISuccessLogin | IFailureLogin;

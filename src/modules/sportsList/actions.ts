import { Action } from 'redux';
import { ActionTypes } from './types';

import { Sports } from 'vdoc/libs/domain/models/Sports';

type ISportsAction = Action<ActionTypes>;

export interface IRequestGetAll extends ISportsAction {
  type: ActionTypes.REQUEST_GET_ALL;
}
export interface ISuccessGetAll extends ISportsAction {
  type: ActionTypes.SUCCESS_GET_ALL;
  payload: {
    sports: Sports[];
  };
}
export interface IFailureGetAll extends ISportsAction {
  type: ActionTypes.FAILURE_GET_ALL;
}

export const requestGetAll = (): IRequestGetAll => ({
  type: ActionTypes.REQUEST_GET_ALL,
});
export const successGetAll = (
  payload: ISuccessGetAll['payload'],
): ISuccessGetAll => ({
  type: ActionTypes.SUCCESS_GET_ALL,
  payload: payload,
});
export const failureGetAll = (): IFailureGetAll => ({
  type: ActionTypes.FAILURE_GET_ALL,
});

export const actions = {
  requestGetAll,
  successGetAll,
  failureGetAll,
};
export type SportsActions = IRequestGetAll | ISuccessGetAll | IFailureGetAll;

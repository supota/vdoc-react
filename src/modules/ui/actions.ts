import { Action } from 'redux';
import { ActionTypes } from './types';

type IUIAction = Action<ActionTypes>;

export interface IToggleLoading extends IUIAction {
  type: ActionTypes;
}

export const toggleLoading = (): IToggleLoading => ({
  type: ActionTypes.TOGGLE_LOADING,
});

export const actions = {
  toggleLoading,
};
export type UIActions = IToggleLoading;

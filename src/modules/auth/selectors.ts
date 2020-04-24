import { IStore } from '../store';
import { IAuthState } from './';

const selectAuthState = (store: IStore): IAuthState => store.auth;

export const selectors = {
  selectAuthState,
};

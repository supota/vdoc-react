import { IStore } from '../store';
import { IAuthState } from './';

const selectAll = (store: IStore): IAuthState => store.auth;

export const selectors = {
  selectAll,
};

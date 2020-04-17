import { IStore } from '../store';
import { IAuthState } from './';

export const selectAuthState = (store: IStore): IAuthState => store.auth;

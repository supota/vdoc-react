import { IStore } from '../store';
import { IUIState } from './';

const selectAll = (store: IStore): IUIState => store.ui;

export const selectors = {
  selectAll,
};

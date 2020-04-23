import { IStore } from '../store';
import { ISportsListState } from './';

import { Sports, SportsID } from 'vdoc/libs/domain/models/Sports';

const selectAll = (store: IStore): ISportsListState => store.sportsList;
const select = (sportsID: SportsID) => (store: IStore): Sports | null => {
  const sportsListState = store.sportsList;
  const sports = sportsListState.sports.find(sports =>
    sports.id.isEqualTo(sportsID),
  );
  return sports || null;
};

export const selectors = {
  selectAll,
  select,
};

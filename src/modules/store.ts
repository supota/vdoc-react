import { createStore, applyMiddleware, combineReducers, Store } from 'redux';

export interface IStore {
  example: string;
}

const configureStore = (initialStore?: IStore): Store => {
  const reducer = combineReducers({});
  const store = createStore(reducer, initialStore);
  return store;
};

const store = configureStore();
export { store };

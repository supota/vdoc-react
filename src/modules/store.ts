import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IState as IAuthState, authRootSaga, authReducer } from './auth';

export interface IStore {
  auth: IAuthState;
}

const configureStore = (initialStore?: IStore): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers({
    auth: authReducer,
  });
  const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(authRootSaga);
  return store;
};

const store = configureStore();
export { store };

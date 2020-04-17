import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { IState as IAuthState, authRootSaga, authReducer } from './auth';

export interface IStore {
  auth: IAuthState;
}

const history = createBrowserHistory();

const configureStore = (initialStore?: IStore): Store => {
  // Middlewaresの作成
  const sagaMiddleware = createSagaMiddleware();

  // Reducersの作成
  const reducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });

  // Storeの作成
  const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );

  // SagaをRun
  sagaMiddleware.run(authRootSaga);

  return store;
};

const store = configureStore();
export { store, history };

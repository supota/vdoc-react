import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { IAuthState, authRootSaga, authReducer } from './auth';
import {
  ISportsListState,
  sportsListRootSaga,
  sportsListReducer,
} from './sportsList';
import { IUIState, uiReducer } from './ui';

export interface IStore {
  auth: IAuthState;
  sportsList: ISportsListState;
  ui: IUIState;
}

const history = createBrowserHistory();

const configureStore = (initialStore?: IStore): Store => {
  // Middlewaresの作成
  const sagaMiddleware = createSagaMiddleware();

  // Reducersの作成
  const reducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    sportsList: sportsListReducer,
    ui: uiReducer,
  });

  // Storeの作成
  const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );

  // SagaをRun
  sagaMiddleware.run(authRootSaga);
  sagaMiddleware.run(sportsListRootSaga);

  return store;
};

const store = configureStore();
export { store, history };

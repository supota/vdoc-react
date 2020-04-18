import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { IAuthState, authRootSaga, authReducer } from './auth';

export interface IStore {
  auth: IAuthState;
}

const history = createBrowserHistory();

// redux-persistの設定
const persistConfig = {
  key: 'vdoc/auth',
  storage: localStorage,
  whiteList: ['auth'],
};

const configureStore = (initialStore?: IStore): Store => {
  // Middlewaresの作成
  const sagaMiddleware = createSagaMiddleware();

  // Reducersの作成
  const reducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });

  // 永続化設定
  const persistedReducer = persistReducer(persistConfig, reducer);

  // Storeの作成
  const store = createStore(
    persistedReducer,
    initialStore,
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );

  // SagaをRun
  sagaMiddleware.run(authRootSaga);

  return store;
};

const store = configureStore();
const persistor = persistStore(store);
export { store, history, persistor };

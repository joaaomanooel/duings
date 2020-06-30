import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { fetchMiddleware } from './middlewares';

const rootPersistConfig = { key: 'root', timeout: 10000, storage: AsyncStorage };

export default (reducers, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Saga
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  middleware.push(fetchMiddleware);
  // Apply Middleware
  enhancers.push(applyMiddleware(...middleware));

  // Store
  const rootReducer = persistReducer(rootPersistConfig, reducers);
  const store = createStore(rootReducer, compose(...enhancers));
  const persistor = persistStore(store);

  // Kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};

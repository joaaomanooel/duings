import { combineReducers } from 'redux';
import rootSaga from '@/sagas';
import configureStore from './configureStore';

const reducers = combineReducers({
  user: require('./User').default,
  fetch: require('./Fetch').default,
  events: require('./Events').default,
  calendar: require('./Calendar').default,
});

export default () => {
  const { store, persistor, sagaMiddleware, ...storeConfig } = configureStore(reducers, rootSaga);
  let { sagasManager } = storeConfig;
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(reducers);
      sagasManager.cancel();
      sagasManager.done.then(() => { sagasManager = sagaMiddleware.run(rootSaga); });
    });
  }

  return { store, persistor };
};

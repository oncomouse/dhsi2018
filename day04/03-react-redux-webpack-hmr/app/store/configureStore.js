import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from '../ducks';

const noopReduxMiddleware = () => next => action => next(action);
const loggerMiddleware = process.env.NODE_ENV !== 'production' ? require('redux-logger').default : noopReduxMiddleware;

const persistConfig = {
  key: APP_TITLE,
  storage,
};

const reducer = persistCombineReducers(persistConfig, reducers);
const initialState = {};
const enhancer = applyMiddleware(
  thunk
  , loggerMiddleware,
);
const configureStore = () => {
  const store = createStore(reducer, initialState, enhancer);
  const persistor = persistStore(store);

  // HMR:
  if (module.hot) {
    module.hot.accept('../ducks/index', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(persistCombineReducers(require('../ducks/index').default));
    });
  }
  return {
    store,
    persistor,
  };
};

export default configureStore;

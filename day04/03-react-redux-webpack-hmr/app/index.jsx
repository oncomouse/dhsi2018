import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/configureStore';
import ErrorBoundary from './components/utilities/ErrorBoundary';
import App from './containers/App';
import './stylesheets/global.scss';

const { store, persistor } = configureStore();

// This seems like an extra step, but it lets us reload on HMR:
const render = (Component) => {
  ReactDOM.render(
    <ErrorBoundary>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Component />
        </Provider>
      </PersistGate>
    </ErrorBoundary>
    , document.getElementById('root'),
  );
};
render(App);
if (module.hot) {
  // eslint-disable-next-line global-require
  module.hot.accept(['containers/App'], () => render(require('./containers/App').default));
}

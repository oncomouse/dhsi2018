import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/configureStore';
import ErrorBoundary from './components/utilities/ErrorBoundary';
import App from './containers/App';
import './stylesheets/global.scss';

const { store, persistor } = configureStore();

ReactDOM.render(
    <ErrorBoundary>
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <App />
            </Provider>
        </PersistGate>
    </ErrorBoundary>
    , document.getElementById('root')
);

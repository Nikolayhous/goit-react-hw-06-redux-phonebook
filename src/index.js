import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './Component/App/App';
import './index.css';
import { store, persistor } from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <PersistGate loading={<h2>Loading</h2>} persistor={persistor}>
            <Provider store={store}>
                <App />
            </Provider>
        </PersistGate>
    </React.StrictMode>,
    document.getElementById('root'),
);

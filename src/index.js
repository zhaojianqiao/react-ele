import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import dataReducer from './reducers/dataState.js'
import App from './containers/App';
import registerServiceWorker from './lib/registerServiceWorker';

const store = createStore(dataReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

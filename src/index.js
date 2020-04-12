import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';


// Create the store
let store = createStore(reducer, middleware)


// Mount the app on the DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

import './index.css';

const devTools =
    // process.env.NODE_ENV === "development"
    //     ? composeWithDevTools(applyMiddleware(reduxThunk))
    //    : 
    applyMiddleware(reduxThunk);

const store = createStore(reducers, {}, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
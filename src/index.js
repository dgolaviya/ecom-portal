import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
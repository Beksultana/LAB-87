import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import postsReducer from './store/reducers/postsReducer';
import postReducer from './store/reducers/postReducer';
import commentsReducer from './store/reducers/commentsReducer';
import userReducer from './store/reducers/userReducer';

const saveToLocalStorege = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch (e) {
        console.log('Could not save state')
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null){
            return undefined;
        }

        return JSON.parse(serializedState)
    }catch (e) {
        return undefined
    }
};

const persistedState = loadFromLocalStorage();

const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
    users: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhencers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, persistedState, enhencers);

store.subscribe(() => {
    saveToLocalStorege({
        users: {
            user: store.getState().users.user
        }
    });
});

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

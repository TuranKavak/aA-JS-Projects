// import { createStore } from 'redux';
// import reducer from './reducer.js';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const Store = createStore(reducer);

// export default Store;

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, logger))
        // applyMiddleware(thunk, logger)
    )
);

export default configureStore;
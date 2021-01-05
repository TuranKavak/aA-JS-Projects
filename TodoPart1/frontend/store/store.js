// import { createStore } from 'redux';
// import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => {
//   const store = createStore(rootReducer, preloadedState);
//   store.subscribe(() => {
//     localStorage.state = JSON.stringify(store.getState());
//   });
//   return store;
// }

// export default configureStore;


import rootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;


// const Store = createStore(rootReducer);

// export default Store;
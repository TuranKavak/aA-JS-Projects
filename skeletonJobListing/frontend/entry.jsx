import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';

import { selectLocation } from './actions';

window.store = store;
window.selectLocation = selectLocation;

// window.addOrange = addOrange;
// window.addApple = addApple;
// window.clearFruit = clearFruit;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});

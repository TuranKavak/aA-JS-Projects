"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _root_reducer = _interopRequireDefault(require("../reducers/root_reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0, _redux.createStore)(_root_reducer["default"], preloadedState);
  store.subscribe(function () {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

var _default = configureStore;
exports["default"] = _default;
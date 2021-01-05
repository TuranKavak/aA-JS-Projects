"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _todos_reducer = _interopRequireDefault(require("./todos_reducer"));

var _steps_reducer = _interopRequireDefault(require("./steps_reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  todos: _todos_reducer["default"],
  steps: _steps_reducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;
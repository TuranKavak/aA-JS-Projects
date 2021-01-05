"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _step_actions = require("../actions/step_actions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stepsReducer = function stepsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var nextState;
  Object.freeze(state);

  switch (action.type) {
    case _step_actions.RECEIVE_STEPS:
      nextState = Object.assign({}, state);
      action.steps.forEach(function (step) {
        return nextState[step.id] = step;
      });
      return nextState;

    case _step_actions.RECEIVE_STEP:
      return Object.assign({}, state, _defineProperty({}, action.step.id, action.step));

    case _step_actions.REMOVE_STEP:
      nextState = Object.assign({}, state);
      delete nextState[action.step.id];
      return nextState;

    default:
      return state;
  }
};

var _default = stepsReducer; // Sample State Shape
// {
//   1: {
//     title: "walk to store",
//     done: false,
//     todo_id: 1
//   },
//   2: {
//     title: "buy soap",
//     done: false,
//     todo_id: 1
//   },
//   3: {
//     title: "walk to park",
//     done: false,
//     todo_id: 3
//   },
//   4: {
//     title: "play with dog",
//     done: false,
//     todo_id: 2
//   }
// };

exports["default"] = _default;
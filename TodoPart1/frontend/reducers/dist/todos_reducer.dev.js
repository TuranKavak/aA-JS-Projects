"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _todo_actions = require("../actions/todo_actions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var todosReducer = function todosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = {};

  switch (action.type) {
    case _todo_actions.RECEIVE_TODOS:
      action.todos.forEach(function (todo) {
        nextState[todo.id] = todo;
      });
      return nextState;

    case _todo_actions.RECEIVE_TODO:
      var newTodo = _defineProperty({}, action.todo.id, action.todo);

      return Object.assign({}, state, newTodo);

    case _todo_actions.REMOVE_TODO:
      nextState = Object.assign({}, state);
      delete nextState[action.todo.id];
      return nextState;

    case _todo_actions.TODO_ERROR:
      alert(action.error);

    default:
      return state;
  }
};

var initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
  3: {
    id: 3,
    title: "wash cat",
    body: "with shampoo",
    done: false
  },
  4: {
    id: 4,
    title: "wash self",
    body: "with shampoo",
    done: false
  }
};
var _default = todosReducer;
exports["default"] = _default;
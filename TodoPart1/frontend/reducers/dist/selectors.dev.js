"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepsByTodoId = exports.allTodos = void 0;

var allTodos = function allTodos(_ref) {
  var todos = _ref.todos;
  return Object.keys(todos).map(function (id) {
    return todos[id];
  });
};

exports.allTodos = allTodos;

var stepsByTodoId = function stepsByTodoId(_ref2, todo_id) {
  var steps = _ref2.steps;
  var stepsByTodoId = [];
  Object.keys(steps).forEach(function (stepId) {
    var step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step);
  });
  return stepsByTodoId;
};

exports.stepsByTodoId = stepsByTodoId;
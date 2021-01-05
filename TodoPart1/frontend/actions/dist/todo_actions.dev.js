"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoError = exports.removeTodo = exports.receiveTodo = exports.receiveTodos = exports.TODO_ERROR = exports.REMOVE_TODO = exports.RECEIVE_TODO = exports.RECEIVE_TODOS = void 0;
var RECEIVE_TODOS = "RECEIVE_TODOS";
exports.RECEIVE_TODOS = RECEIVE_TODOS;
var RECEIVE_TODO = "RECEIVE_TODO";
exports.RECEIVE_TODO = RECEIVE_TODO;
var REMOVE_TODO = "REMOVE_TODO";
exports.REMOVE_TODO = REMOVE_TODO;
var TODO_ERROR = "TODO_ERROR";
exports.TODO_ERROR = TODO_ERROR;

var receiveTodos = function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

exports.receiveTodos = receiveTodos;

var receiveTodo = function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

exports.receiveTodo = receiveTodo;

var removeTodo = function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo: todo
  };
};

exports.removeTodo = removeTodo;

var todoError = function todoError(error) {
  return {
    type: TODO_ERROR,
    error: error
  };
};

exports.todoError = todoError;
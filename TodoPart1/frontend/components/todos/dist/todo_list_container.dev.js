"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _todo_list = _interopRequireDefault(require("./todo_list"));

var _todo_actions = require("../../actions/todo_actions");

var _selectors = require("../../reducers/selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//actions
// action creator
var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: (0, _selectors.allTodos)(state),
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // create action dispatcher
    receiveTodo: function receiveTodo(todo) {
      return dispatch((0, _todo_actions.receiveTodos)(todo));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_todo_list["default"]);

exports["default"] = _default;
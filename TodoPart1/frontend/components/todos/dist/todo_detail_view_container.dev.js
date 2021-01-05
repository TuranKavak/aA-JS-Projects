"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _todo_detail_view = _interopRequireDefault(require("./todo_detail_view"));

var _todo_actions = require("../../actions/todo_actions");

var _step_actions = require("../../actions/step_actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// action creator
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var todo = _ref.todo;
  return {
    removeTodo: function removeTodo() {
      return dispatch((0, _todo_actions.removeTodo)(todo));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, // todo props is already passed in
mapDispatchToProps)(_todo_detail_view["default"]);

exports["default"] = _default;
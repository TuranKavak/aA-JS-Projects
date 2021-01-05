"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _step_list = _interopRequireDefault(require("./step_list"));

var _step_actions = require("../../actions/step_actions");

var _selectors = require("../../reducers/selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// action creator
var mapStateToProps = function mapStateToProps(state, _ref) {
  var todo_id = _ref.todo_id;
  return {
    steps: (0, _selectors.stepsByTodoId)(state, todo_id),
    todo_id: todo_id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // create action dispatcher
    receiveStep: function receiveStep(step) {
      return dispatch((0, _step_actions.receiveStep)(step));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_step_list["default"]);

exports["default"] = _default;
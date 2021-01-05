"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _step_list_item = _interopRequireDefault(require("./step_list_item"));

var _step_actions = require("../../actions/step_actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var step = _ref.step;
  return {
    removeStep: function removeStep() {
      return dispatch((0, _step_actions.removeStep)(step));
    },
    receiveStep: function receiveStep(step) {
      return dispatch((0, _step_actions.receiveStep)(step));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_step_list_item["default"]);

exports["default"] = _default;
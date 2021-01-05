"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  city: "Please Select",
  jobs: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SWITCH_LOCATION":
      return {
        city: action.city,
        jobs: action.jobs
      };

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
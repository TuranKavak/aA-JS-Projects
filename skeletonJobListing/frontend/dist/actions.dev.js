"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var selectLocation = function selectLocation(city, jobs) {
  return {
    type: "SWITCH_LOCATION",
    city: city,
    jobs: jobs
  };
};

var _default = selectLocation;
exports["default"] = _default;
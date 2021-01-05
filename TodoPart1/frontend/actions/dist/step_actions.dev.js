"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStep = exports.receiveStep = exports.receiveSteps = exports.REMOVE_STEP = exports.RECEIVE_STEP = exports.RECEIVE_STEPS = void 0;
var RECEIVE_STEPS = "RECEIVE_STEPS";
exports.RECEIVE_STEPS = RECEIVE_STEPS;
var RECEIVE_STEP = "RECEIVE_STEP";
exports.RECEIVE_STEP = RECEIVE_STEP;
var REMOVE_STEP = "REMOVE_STEP";
exports.REMOVE_STEP = REMOVE_STEP;

var receiveSteps = function receiveSteps(steps) {
  return {
    type: RECEIVE_STEPS,
    steps: steps
  };
};

exports.receiveSteps = receiveSteps;

var receiveStep = function receiveStep(step) {
  return {
    type: RECEIVE_STEP,
    step: step
  };
};

exports.receiveStep = receiveStep;

var removeStep = function removeStep(step) {
  return {
    type: REMOVE_STEP,
    step: step
  };
};

exports.removeStep = removeStep;
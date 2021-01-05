"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = uniqueId;

function uniqueId() {
  return new Date().getTime();
}
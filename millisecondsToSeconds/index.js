"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = millisecondsToSeconds;

var _index = require("../constants/index.js");

/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - number of milliseconds to be converted
 *
 * @returns the number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
  var seconds = milliseconds / _index.millisecondsInSecond;
  return Math.floor(seconds);
}

module.exports = exports.default;
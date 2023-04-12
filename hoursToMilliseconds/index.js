"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoursToMilliseconds;

var _index = require("../constants/index.js");

/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param hours - number of hours to be converted
 *
 * @returns the number of hours converted to milliseconds
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */
function hoursToMilliseconds(hours) {
  return Math.floor(hours * _index.millisecondsInHour);
}

module.exports = exports.default;
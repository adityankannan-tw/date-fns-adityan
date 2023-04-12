"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = millisecondsToHours;

var _index = require("../constants/index.js");

/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - number of milliseconds to be converted
 *
 * @returns the number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */
function millisecondsToHours(milliseconds) {
  var hours = milliseconds / _index.millisecondsInHour;
  return Math.floor(hours);
}

module.exports = exports.default;
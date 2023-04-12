"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secondsToHours;

var _index = require("../constants/index.js");

/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param seconds - number of seconds to be converted
 *
 * @returns the number of seconds converted in hours
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */
function secondsToHours(seconds) {
  var hours = seconds / _index.secondsInHour;
  return Math.floor(hours);
}

module.exports = exports.default;
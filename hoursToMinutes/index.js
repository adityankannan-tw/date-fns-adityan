"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoursToMinutes;

var _index = require("../constants/index.js");

/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param hours - number of hours to be converted
 *
 * @returns the number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */
function hoursToMinutes(hours) {
  return Math.floor(hours * _index.minutesInHour);
}

module.exports = exports.default;
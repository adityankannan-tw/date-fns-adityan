"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minutesToHours;

var _index = require("../constants/index.js");

/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - number of minutes to be converted
 *
 * @returns the number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */
function minutesToHours(minutes) {
  var hours = minutes / _index.minutesInHour;
  return Math.floor(hours);
}

module.exports = exports.default;
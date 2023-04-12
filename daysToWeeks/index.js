"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = daysToWeeks;

var _index = require("../constants/index.js");

/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param days - number of days to be converted
 *
 * @returns the number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */
function daysToWeeks(days) {
  var weeks = days / _index.daysInWeek;
  return Math.floor(weeks);
}

module.exports = exports.default;
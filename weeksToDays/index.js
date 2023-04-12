"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = weeksToDays;

var _index = require("../constants/index.js");

/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - number of weeks to be converted
 *
 * @returns the number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
function weeksToDays(weeks) {
  return Math.floor(weeks * _index.daysInWeek);
}

module.exports = exports.default;
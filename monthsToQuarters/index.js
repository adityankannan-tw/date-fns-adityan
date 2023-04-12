"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = monthsToQuarters;

var _index = require("../constants/index.js");

/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - number of months to be converted.
 *
 * @returns the number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */
function monthsToQuarters(months) {
  var quarters = months / _index.monthsInQuarter;
  return Math.floor(quarters);
}

module.exports = exports.default;
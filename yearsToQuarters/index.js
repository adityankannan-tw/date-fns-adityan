"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = yearsToQuarters;

var _index = require("../constants/index.js");

/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - number of years to be converted
 *
 * @returns the number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */
function yearsToQuarters(years) {
  return Math.floor(years * _index.quartersInYear);
}

module.exports = exports.default;
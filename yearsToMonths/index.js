"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = yearsToMonths;

var _index = require("../constants/index.js");

/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param years - number of years to be converted
 *
 * @returns the number of years converted in months
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */
function yearsToMonths(years) {
  return Math.floor(years * _index.monthsInYear);
}

module.exports = exports.default;
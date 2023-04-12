"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quartersToMonths;

var _index = require("../constants/index.js");

/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param quarters - number of quarters to be converted
 *
 * @returns the number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */
function quartersToMonths(quarters) {
  return Math.floor(quarters * _index.monthsInQuarter);
}

module.exports = exports.default;
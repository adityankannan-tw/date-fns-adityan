"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minutesToMilliseconds;

var _index = require("../constants/index.js");

/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - number of minutes to be converted
 *
 * @returns the number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */
function minutesToMilliseconds(minutes) {
  return Math.floor(minutes * _index.millisecondsInMinute);
}

module.exports = exports.default;
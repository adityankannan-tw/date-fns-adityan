"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minutesToSeconds;

var _index = require("../constants/index.js");

/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param minutes - number of minutes to be converted
 *
 * @returns the number of minutes converted in seconds
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */
function minutesToSeconds(minutes) {
  return Math.floor(minutes * _index.secondsInMinute);
}

module.exports = exports.default;
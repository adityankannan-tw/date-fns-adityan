"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addWeeks;

var _index = _interopRequireDefault(require("../addDays/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, amount) {
  var days = amount * 7;
  return (0, _index.default)(dirtyDate, days);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subMonths;

var _index = _interopRequireDefault(require("../addMonths/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, -amount);
}

module.exports = exports.default;
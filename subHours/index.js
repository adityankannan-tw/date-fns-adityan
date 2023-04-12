"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subHours;

var _index = _interopRequireDefault(require("../addHours/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of hours to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, -amount);
}

module.exports = exports.default;
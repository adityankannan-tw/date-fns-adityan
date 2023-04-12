"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subYears;

var _index = _interopRequireDefault(require("../addYears/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, -amount);
}

module.exports = exports.default;
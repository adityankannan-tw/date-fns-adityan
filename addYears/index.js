"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addYears;

var _index = _interopRequireDefault(require("../addMonths/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, amount * 12);
}

module.exports = exports.default;
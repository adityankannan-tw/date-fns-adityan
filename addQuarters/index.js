"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addQuarters;

var _index = _interopRequireDefault(require("../addMonths/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(dirtyDate, amount) {
  var months = amount * 3;
  return (0, _index.default)(dirtyDate, months);
}

module.exports = exports.default;
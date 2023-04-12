"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLeapYear;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - the date to check
 * @returns the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var year = date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

module.exports = exports.default;
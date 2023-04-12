"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInYear;

var _index = _interopRequireDefault(require("../isLeapYear/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - the given date
 * @returns the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear(dirtyDate) {
  var date = (0, _index2.default)(dirtyDate);

  if (String(new Date(date)) === 'Invalid Date') {
    return NaN;
  }

  return (0, _index.default)(date) ? 366 : 365;
}

module.exports = exports.default;
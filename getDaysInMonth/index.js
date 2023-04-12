"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInMonth;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param date - the given date
 * @returns the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = (0, _index2.default)(dirtyDate, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

module.exports = exports.default;
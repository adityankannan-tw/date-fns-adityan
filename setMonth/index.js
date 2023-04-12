"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMonth;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../getDaysInMonth/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param date - the date to be changed
 * @param month - the month of the new date
 * @returns the new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(dirtyDate, month) {
  var date = (0, _index3.default)(dirtyDate);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = (0, _index.default)(dirtyDate, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0, _index2.default)(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

module.exports = exports.default;
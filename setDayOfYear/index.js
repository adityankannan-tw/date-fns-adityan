"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setDayOfYear;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param date - the date to be changed
 * @param dayOfYear - the day of the year of the new date
 * @returns the new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * const result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear(dirtyDate, dayOfYear) {
  var date = (0, _index.default)(dirtyDate);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISOWeeksInYear;

var _index = _interopRequireDefault(require("../addWeeks/index.js"));

var _index2 = require("../constants/index.js");

var _index3 = _interopRequireDefault(require("../startOfISOWeekYear/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the given date
 * @returns the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear(dirtyDate) {
  var thisYear = (0, _index3.default)(dirtyDate);
  var nextYear = (0, _index3.default)((0, _index.default)(thisYear, 60));
  var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / _index2.millisecondsInWeek);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarISOWeeks;

var _index = require("../constants/index.js");

var _index2 = _interopRequireDefault(require("../startOfISOWeek/index.js"));

var _index3 = _interopRequireDefault(require("../_lib/getTimezoneOffsetInMilliseconds/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = (0, _index2.default)(dirtyDateLeft);
  var startOfISOWeekRight = (0, _index2.default)(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - (0, _index3.default)(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - (0, _index3.default)(startOfISOWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / _index.millisecondsInWeek);
}

module.exports = exports.default;
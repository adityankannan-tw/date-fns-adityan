"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarWeeks;

var _index = require("../constants/index.js");

var _index2 = _interopRequireDefault(require("../startOfWeek/index.js"));

var _index3 = _interopRequireDefault(require("../_lib/getTimezoneOffsetInMilliseconds/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
  var startOfWeekLeft = (0, _index2.default)(dirtyDateLeft, options);
  var startOfWeekRight = (0, _index2.default)(dirtyDateRight, options);
  var timestampLeft = startOfWeekLeft.getTime() - (0, _index3.default)(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - (0, _index3.default)(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / _index.millisecondsInWeek);
}

module.exports = exports.default;
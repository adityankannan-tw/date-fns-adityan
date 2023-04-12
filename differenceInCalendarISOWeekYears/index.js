"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarISOWeekYears;

var _index = _interopRequireDefault(require("../getISOWeekYear/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  return (0, _index.default)(dirtyDateLeft) - (0, _index.default)(dirtyDateRight);
}

module.exports = exports.default;
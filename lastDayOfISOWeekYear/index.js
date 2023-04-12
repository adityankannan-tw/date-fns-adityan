"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfISOWeekYear;

var _index = _interopRequireDefault(require("../getISOWeekYear/index.js"));

var _index2 = _interopRequireDefault(require("../startOfISOWeek/index.js"));

var _index3 = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the original date
 * @returns the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOWeekYear(dirtyDate) {
  var year = (0, _index.default)(dirtyDate);
  var fourthOfJanuary = (0, _index3.default)(dirtyDate, 0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0, _index2.default)(fourthOfJanuary);
  date.setDate(date.getDate() - 1);
  return date;
}

module.exports = exports.default;
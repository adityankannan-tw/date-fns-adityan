"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISOWeekYear;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../differenceInCalendarDays/index.js"));

var _index3 = _interopRequireDefault(require("../startOfISOWeekYear/index.js"));

var _index4 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the date to be changed
 * @param isoWeekYear - the ISO week-numbering year of the new date
 * @returns the new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOWeekYear(dirtyDate, isoWeekYear) {
  var date = (0, _index4.default)(dirtyDate);
  var diff = (0, _index2.default)(date, (0, _index3.default)(date));
  var fourthOfJanuary = (0, _index.default)(dirtyDate, 0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = (0, _index3.default)(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}

module.exports = exports.default;
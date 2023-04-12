"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeeksInMonth;

var _index = _interopRequireDefault(require("../differenceInCalendarWeeks/index.js"));

var _index2 = _interopRequireDefault(require("../lastDayOfMonth/index.js"));

var _index3 = _interopRequireDefault(require("../startOfMonth/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
function getWeeksInMonth(date, options) {
  return (0, _index.default)((0, _index2.default)(date), (0, _index3.default)(date), options) + 1;
}

module.exports = exports.default;
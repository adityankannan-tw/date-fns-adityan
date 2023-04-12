"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISODay;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the given date
 * @returns the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

module.exports = exports.default;
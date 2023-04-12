"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDayOfYear;

var _index = _interopRequireDefault(require("../differenceInCalendarDays/index.js"));

var _index2 = _interopRequireDefault(require("../startOfYear/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - the given date
 * @returns the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(dirtyDate) {
  var date = (0, _index3.default)(dirtyDate);
  var diff = (0, _index.default)(date, (0, _index2.default)(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

module.exports = exports.default;
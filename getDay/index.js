"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDay;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - the given date
 * @returns the day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getDay();
  return day;
}

module.exports = exports.default;
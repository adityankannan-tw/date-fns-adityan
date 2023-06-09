"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;

var _index = _interopRequireDefault(require("../max/index.js"));

var _index2 = _interopRequireDefault(require("../min/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @example
 * // What is Mar, 21, 2021 bounded to an interval starting at Mar, 22, 2021 and ending at Apr, 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 *
 * @param date - the date to be bounded
 * @param interval - the interval to bound to
 * @returns the date bounded by the start and the end of the interval
 */
function clamp(date, _ref) {
  var start = _ref.start,
      end = _ref.end;
  return (0, _index2.default)([(0, _index.default)([date, start]), end]);
}

module.exports = exports.default;
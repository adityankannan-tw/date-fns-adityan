"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isThisISOWeek;

var _index = _interopRequireDefault(require("../isSameISOWeek/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek(dirtyDate) {
  return (0, _index.default)(dirtyDate, Date.now());
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSaturday;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - the date to check
 * @returns the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(dirtyDate) {
  return (0, _index.default)(dirtyDate).getDay() === 6;
}

module.exports = exports.default;
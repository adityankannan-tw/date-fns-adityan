"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWednesday;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - the date to check
 * @returns the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday(dirtyDate) {
  return (0, _index.default)(dirtyDate).getDay() === 3;
}

module.exports = exports.default;
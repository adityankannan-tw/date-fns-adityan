"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isThursday;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param date - the date to check
 * @returns the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(dirtyDate) {
  return (0, _index.default)(dirtyDate).getDay() === 4;
}

module.exports = exports.default;
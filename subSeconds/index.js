"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subSeconds;

var _index = _interopRequireDefault(require("../addSeconds/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of seconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, -amount);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMinutes;

var _index = _interopRequireDefault(require("../addMilliseconds/index.js"));

var _index2 = require("../constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, amount) {
  return (0, _index.default)(dirtyDate, amount * _index2.millisecondsInMinute);
}

module.exports = exports.default;
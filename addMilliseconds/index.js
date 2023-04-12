"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMilliseconds;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, amount) {
  var timestamp = (0, _index.default)(dirtyDate).getTime();
  return (0, _index2.default)(dirtyDate, timestamp + amount);
}

module.exports = exports.default;
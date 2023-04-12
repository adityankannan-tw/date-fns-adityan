"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addDays;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns - the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, amount) {
  var date = (0, _index.default)(dirtyDate);
  if (isNaN(amount)) return (0, _index2.default)(dirtyDate, NaN);

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

module.exports = exports.default;
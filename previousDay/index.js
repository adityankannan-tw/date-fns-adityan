"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previousDay;

var _index = _interopRequireDefault(require("../getDay/index.js"));

var _index2 = _interopRequireDefault(require("../subDays/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param date - the date to check
 * @param day - day of the week
 * @returns - the date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
function previousDay(date, day) {
  var delta = (0, _index.default)(date) - day;
  if (delta <= 0) delta += 7;
  return (0, _index2.default)(date, delta);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addBusinessDays;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../isSaturday/index.js"));

var _index3 = _interopRequireDefault(require("../isSunday/index.js"));

var _index4 = _interopRequireDefault(require("../isWeekend/index.js"));

var _index5 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addBusinessDays
 * @category Date Extension Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param date - the date to be changed
 * @param amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
function addBusinessDays(dirtyDate, amount) {
  var date = (0, _index5.default)(dirtyDate);
  var startedOnWeekend = (0, _index4.default)(date);
  if (isNaN(amount)) return (0, _index.default)(dirtyDate, NaN);
  var hours = date.getHours();
  var sign = amount < 0 ? -1 : 1;
  var fullWeeks = Math.trunc(amount / 5);
  date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week

  var restDays = Math.abs(amount % 5); // Loops over remaining days

  while (restDays > 0) {
    date.setDate(date.getDate() + sign);
    if (!(0, _index4.default)(date)) restDays -= 1;
  } // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day


  if (startedOnWeekend && (0, _index4.default)(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if ((0, _index2.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
    if ((0, _index3.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
  } // Restore hours to avoid DST lag


  date.setHours(hours);
  return date;
}

module.exports = exports.default;
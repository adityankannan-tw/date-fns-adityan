"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachWeekendOfInterval;

var _index = _interopRequireDefault(require("../eachDayOfInterval/index.js"));

var _index2 = _interopRequireDefault(require("../isSunday/index.js"));

var _index3 = _interopRequireDefault(require("../isWeekend/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param interval - the given interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns an array containing all the Saturdays and Sundays
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
function eachWeekendOfInterval(interval) {
  var dateInterval = (0, _index.default)(interval);
  var weekends = [];
  var index = 0;

  while (index < dateInterval.length) {
    var date = dateInterval[index++];

    if ((0, _index3.default)(date)) {
      weekends.push(date);
      if ((0, _index2.default)(date)) index = index + 5;
    }
  }

  return weekends;
}

module.exports = exports.default;
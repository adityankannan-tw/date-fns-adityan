"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachMinuteOfInterval;

var _index = _interopRequireDefault(require("../addMinutes/index.js"));

var _index2 = _interopRequireDefault(require("../startOfMinute/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param options - an object with options.
 * @returns the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
function eachMinuteOfInterval(interval, options) {
  var _options$step;

  var startDate = (0, _index2.default)((0, _index3.default)(interval.start));
  var endDate = (0, _index3.default)(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();

  if (startTime >= endTime) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  var step = (_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number equal to or greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push((0, _index3.default)(currentDate));
    currentDate = (0, _index.default)(currentDate, step);
  }

  return dates;
}

module.exports = exports.default;
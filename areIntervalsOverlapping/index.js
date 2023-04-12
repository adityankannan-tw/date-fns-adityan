"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = areIntervalsOverlapping;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping.
 *
 * @param intervalLeft - the first interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param intervalRight - the second interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param options - the object with options
 * @returns whether the time intervals are overlapping
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
  var leftStartTime = (0, _index.default)(intervalLeft.start).getTime();
  var leftEndTime = (0, _index.default)(intervalLeft.end).getTime();
  var rightStartTime = (0, _index.default)(intervalRight.start).getTime();
  var rightEndTime = (0, _index.default)(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  if (options !== null && options !== void 0 && options.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

module.exports = exports.default;
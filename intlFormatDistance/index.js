"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intlFormatDistance;

var _index = require("../constants/index.js");

var _index2 = _interopRequireDefault(require("../differenceInCalendarDays/index.js"));

var _index3 = _interopRequireDefault(require("../differenceInCalendarMonths/index.js"));

var _index4 = _interopRequireDefault(require("../differenceInCalendarQuarters/index.js"));

var _index5 = _interopRequireDefault(require("../differenceInCalendarWeeks/index.js"));

var _index6 = _interopRequireDefault(require("../differenceInCalendarYears/index.js"));

var _index7 = _interopRequireDefault(require("../differenceInHours/index.js"));

var _index8 = _interopRequireDefault(require("../differenceInMinutes/index.js"));

var _index9 = _interopRequireDefault(require("../differenceInSeconds/index.js"));

var _index10 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param date - the date
 * @param baseDate - the date to compare with.
 * @param options - an object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 * @returns the distance in words according to language-sensitive relative time formatting.
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.unit` must not be invalid Unit
 * @throws {RangeError} `options.locale` must not be invalid locale
 * @throws {RangeError} `options.localeMatcher` must not be invalid localeMatcher
 * @throws {RangeError} `options.numeric` must not be invalid numeric
 * @throws {RangeError} `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(date, baseDate, options) {
  var value = 0;
  var unit;
  var dateLeft = (0, _index10.default)(date);
  var dateRight = (0, _index10.default)(baseDate);

  if (!(options !== null && options !== void 0 && options.unit)) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    var diffInSeconds = (0, _index9.default)(dateLeft, dateRight); // The smallest unit

    if (Math.abs(diffInSeconds) < _index.secondsInMinute) {
      value = (0, _index9.default)(dateLeft, dateRight);
      unit = 'second';
    } else if (Math.abs(diffInSeconds) < _index.secondsInHour) {
      value = (0, _index8.default)(dateLeft, dateRight);
      unit = 'minute';
    } else if (Math.abs(diffInSeconds) < _index.secondsInDay && Math.abs((0, _index2.default)(dateLeft, dateRight)) < 1) {
      value = (0, _index7.default)(dateLeft, dateRight);
      unit = 'hour';
    } else if (Math.abs(diffInSeconds) < _index.secondsInWeek && (value = (0, _index2.default)(dateLeft, dateRight)) && Math.abs(value) < 7) {
      unit = 'day';
    } else if (Math.abs(diffInSeconds) < _index.secondsInMonth) {
      value = (0, _index5.default)(dateLeft, dateRight);
      unit = 'week';
    } else if (Math.abs(diffInSeconds) < _index.secondsInQuarter) {
      value = (0, _index3.default)(dateLeft, dateRight);
      unit = 'month';
    } else if (Math.abs(diffInSeconds) < _index.secondsInYear) {
      if ((0, _index4.default)(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = (0, _index4.default)(dateLeft, dateRight);
        unit = 'quarter';
      } else {
        value = (0, _index6.default)(dateLeft, dateRight);
        unit = 'year';
      }
    } else {
      value = (0, _index6.default)(dateLeft, dateRight);
      unit = 'year';
    }
  } else {
    // Get the value if unit is specified
    unit = options === null || options === void 0 ? void 0 : options.unit;

    if (unit === 'second') {
      value = (0, _index9.default)(dateLeft, dateRight);
    } else if (unit === 'minute') {
      value = (0, _index8.default)(dateLeft, dateRight);
    } else if (unit === 'hour') {
      value = (0, _index7.default)(dateLeft, dateRight);
    } else if (unit === 'day') {
      value = (0, _index2.default)(dateLeft, dateRight);
    } else if (unit === 'week') {
      value = (0, _index5.default)(dateLeft, dateRight);
    } else if (unit === 'month') {
      value = (0, _index3.default)(dateLeft, dateRight);
    } else if (unit === 'quarter') {
      value = (0, _index4.default)(dateLeft, dateRight);
    } else if (unit === 'year') {
      value = (0, _index6.default)(dateLeft, dateRight);
    }
  }

  var rtf = new Intl.RelativeTimeFormat(options === null || options === void 0 ? void 0 : options.locale, {
    localeMatcher: options === null || options === void 0 ? void 0 : options.localeMatcher,
    numeric: (options === null || options === void 0 ? void 0 : options.numeric) || 'auto',
    style: options === null || options === void 0 ? void 0 : options.style
  });
  return rtf.format(value, unit);
}

module.exports = exports.default;
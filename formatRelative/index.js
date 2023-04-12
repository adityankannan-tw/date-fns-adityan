"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;

var _index = _interopRequireDefault(require("../differenceInCalendarDays/index.js"));

var _index2 = _interopRequireDefault(require("../format/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

var _index4 = _interopRequireDefault(require("../_lib/defaultLocale/index.js"));

var _index5 = require("../_lib/defaultOptions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param date - the date to format
 * @param baseDate - the date to compare with
 * @param options - an object with options.
 * @returns the date in words
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$weekStartsOn, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2;

  var date = (0, _index3.default)(dirtyDate);
  var baseDate = (0, _index3.default)(dirtyBaseDate);
  var defaultOptions = (0, _index5.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _index4.default;
  var weekStartsOn = (_ref2 = (_ref3 = (_ref4 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = (0, _index.default)(date, baseDate);

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }

  var token;

  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var formatStr = locale.formatRelative(token, date, baseDate, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
  return (0, _index2.default)(date, formatStr, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
}

module.exports = exports.default;
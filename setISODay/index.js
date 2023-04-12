"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISODay;

var _index = _interopRequireDefault(require("../addDays/index.js"));

var _index2 = _interopRequireDefault(require("../getISODay/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param date - the date to be changed
 * @param day - the day of the ISO week of the new date
 * @returns the new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(dirtyDate, day) {
  var date = (0, _index3.default)(dirtyDate);
  var currentDay = (0, _index2.default)(date);
  var diff = day - currentDay;
  return (0, _index.default)(date, diff);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISOWeek;

var _index = _interopRequireDefault(require("../getISOWeek/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the date to be changed
 * @param isoWeek - the ISO week of the new date
 * @returns the new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(dirtyDate, isoWeek) {
  var date = (0, _index2.default)(dirtyDate);
  var diff = (0, _index.default)(date) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

module.exports = exports.default;
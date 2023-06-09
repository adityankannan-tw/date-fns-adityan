"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setYear;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param date - the date to be changed
 * @param year - the year of the new date
 * @returns the new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(dirtyDate, year) {
  var date = (0, _index2.default)(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return (0, _index.default)(dirtyDate, NaN);
  }

  date.setFullYear(year);
  return date;
}

module.exports = exports.default;
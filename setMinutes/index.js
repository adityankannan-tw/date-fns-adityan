"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMinutes;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param date - the date to be changed
 * @param minutes - the minutes of the new date
 * @returns the new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(dirtyDate, minutes) {
  var date = (0, _index.default)(dirtyDate);
  date.setMinutes(minutes);
  return date;
}

module.exports = exports.default;
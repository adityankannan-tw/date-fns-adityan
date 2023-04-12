"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setHours;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param date - the date to be changed
 * @param hours - the hours of the new date
 * @returns the new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(dirtyDate, hours) {
  var date = (0, _index.default)(dirtyDate);
  date.setHours(hours);
  return date;
}

module.exports = exports.default;
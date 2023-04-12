"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setSeconds;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param date - the date to be changed
 * @param seconds - the seconds of the new date
 * @returns the new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(dirtyDate, seconds) {
  var date = (0, _index.default)(dirtyDate);
  date.setSeconds(seconds);
  return date;
}

module.exports = exports.default;
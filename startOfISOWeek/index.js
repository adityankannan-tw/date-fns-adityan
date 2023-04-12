"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfISOWeek;

var _index = _interopRequireDefault(require("../startOfWeek/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the original date
 * @returns the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(dirtyDate) {
  return (0, _index.default)(dirtyDate, {
    weekStartsOn: 1
  });
}

module.exports = exports.default;
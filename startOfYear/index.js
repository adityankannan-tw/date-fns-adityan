"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfYear;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(dirtyDate) {
  var cleanDate = (0, _index.default)(dirtyDate);
  var date = (0, _index2.default)(dirtyDate, 0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;
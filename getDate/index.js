"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDate;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param date - the given date
 * @returns the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

module.exports = exports.default;
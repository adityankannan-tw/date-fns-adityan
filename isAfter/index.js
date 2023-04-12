"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - the date that should be after the other one to return true
 * @param dateToCompare - the date to compare with
 * @returns the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  var date = (0, _index.default)(dirtyDate);
  var dateToCompare = (0, _index.default)(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

module.exports = exports.default;
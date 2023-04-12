"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setQuarter;

var _index = _interopRequireDefault(require("../setMonth/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param date - the date to be changed
 * @param quarter - the quarter of the new date
 * @returns the new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(dirtyDate, quarter) {
  var date = (0, _index2.default)(dirtyDate);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return (0, _index.default)(date, date.getMonth() + diff * 3);
}

module.exports = exports.default;
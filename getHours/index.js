"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHours;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param date - the given date
 * @returns the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(dirtyDate) {
  var date = (0, _index.default)(dirtyDate);
  var hours = date.getHours();
  return hours;
}

module.exports = exports.default;
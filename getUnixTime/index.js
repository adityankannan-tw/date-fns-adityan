"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUnixTime;

var _index = _interopRequireDefault(require("../getTime/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - the given date
 * @returns the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
function getUnixTime(dirtyDate) {
  return Math.floor((0, _index.default)(dirtyDate) / 1000);
}

module.exports = exports.default;
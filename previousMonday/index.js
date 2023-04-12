"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previousMonday;

var _index = _interopRequireDefault(require("../previousDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @param date - the date to start counting from
 * @returns the previous Monday
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */
function previousMonday(date) {
  return (0, _index.default)(date, 1);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previousSunday;

var _index = _interopRequireDefault(require("../previousDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @param date - the date to start counting from
 * @returns the previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */
function previousSunday(date) {
  return (0, _index.default)(date, 0);
}

module.exports = exports.default;
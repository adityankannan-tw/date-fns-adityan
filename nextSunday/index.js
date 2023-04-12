"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextSunday;

var _index = _interopRequireDefault(require("../nextDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param date - the date to start counting from
 * @returns the next Sunday
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
function nextSunday(date) {
  return (0, _index.default)(date, 0);
}

module.exports = exports.default;
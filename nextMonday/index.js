"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextMonday;

var _index = _interopRequireDefault(require("../nextDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param date - the date to start counting from
 * @returns the next Monday
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */
function nextMonday(date) {
  return (0, _index.default)(date, 1);
}

module.exports = exports.default;
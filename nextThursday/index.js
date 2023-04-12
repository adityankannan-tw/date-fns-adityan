"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextThursday;

var _index = _interopRequireDefault(require("../nextDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @param date - the date to start counting from
 * @returns the next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */
function nextThursday(date) {
  return (0, _index.default)(date, 4);
}

module.exports = exports.default;
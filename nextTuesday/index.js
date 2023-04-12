"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextTuesday;

var _index = _interopRequireDefault(require("../nextDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param date - the date to start counting from
 * @returns the next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextTuesday(date) {
  return (0, _index.default)(date, 2);
}

module.exports = exports.default;
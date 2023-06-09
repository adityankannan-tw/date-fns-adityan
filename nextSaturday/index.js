"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextSaturday;

var _index = _interopRequireDefault(require("../nextDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @param date - the date to start counting from
 * @returns the next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */
function nextSaturday(date) {
  return (0, _index.default)(date, 6);
}

module.exports = exports.default;
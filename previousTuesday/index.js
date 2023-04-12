"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previousTuesday;

var _index = _interopRequireDefault(require("../previousDay/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @param date - the date to start counting from
 * @returns the previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */
function previousTuesday(date) {
  return (0, _index.default)(date, 2);
}

module.exports = exports.default;
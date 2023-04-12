"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInHours;

var _index = require("../constants/index.js");

var _index2 = _interopRequireDefault(require("../differenceInMilliseconds/index.js"));

var _index3 = require("../_lib/roundingMethods/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  var diff = (0, _index2.default)(dateLeft, dateRight) / _index.millisecondsInHour;

  return (0, _index3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInQuarters;

var _index = _interopRequireDefault(require("../differenceInMonths/index.js"));

var _index2 = require("../_lib/roundingMethods/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
function differenceInQuarters(dateLeft, dateRight, options) {
  var diff = (0, _index.default)(dateLeft, dateRight) / 3;
  return (0, _index2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

module.exports = exports.default;
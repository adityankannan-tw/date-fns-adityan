"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = roundToNearestMinutes;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

var _index3 = require("../_lib/roundingMethods/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @param date - the date to round
 * @param options - an object with options.
 * @returns the new date rounded to the closest minute
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */
function roundToNearestMinutes(dirtyDate, options) {
  var _options$nearestTo;

  var nearestTo = (_options$nearestTo = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _options$nearestTo !== void 0 ? _options$nearestTo : 1;

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30');
  }

  var date = (0, _index2.default)(dirtyDate);
  var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case

  var minutes = date.getMinutes() + seconds / 60;
  var roundingMethod = (0, _index3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod);
  var roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  var remainderMinutes = minutes % nearestTo;
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
  var result = (0, _index.default)(date, date);
  result.setMinutes(roundedMinutes + addedMinutes, 0, 0);
  return result;
}

module.exports = exports.default;
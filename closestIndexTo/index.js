"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestIndexTo;

var _index = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param dateToCompare - the date to compare with
 * @param datesArray - the array to search
 * @returns an index of the date closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo(dirtyDateToCompare, datesArray) {
  var dateToCompare = (0, _index.default)(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return NaN;
  var timeToCompare = dateToCompare.getTime();
  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = (0, _index.default)(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

module.exports = exports.default;
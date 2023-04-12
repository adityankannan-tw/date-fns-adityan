"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestTo;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param dateToCompare - the date to compare with
 * @param datesArray - the array to search
 * @returns the date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo(dirtyDateToCompare, datesArray) {
  var dateToCompare = (0, _index2.default)(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return (0, _index.default)(dirtyDateToCompare, NaN);
  var timeToCompare = dateToCompare.getTime();
  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0, _index2.default)(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = (0, _index.default)(dirtyDateToCompare, NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = currentDate;
      minDistance = distance;
    }
  });
  return result;
}

module.exports = exports.default;
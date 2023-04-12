"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpose;

var _index = _interopRequireDefault(require("../constructFrom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @param fromDate {Date|number} - the date to use values from
 * @param constructor {Date|DateConstructor} - the date constructor to use
 * @returns date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(fromDate, constructor) {
  var date = constructor instanceof Date ? (0, _index.default)(constructor, 0) : new constructor(0);
  date.setFullYear(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  date.setHours(fromDate.getHours(), fromDate.getMinutes(), fromDate.getSeconds(), fromDate.getMilliseconds());
  return date;
}

module.exports = exports.default;
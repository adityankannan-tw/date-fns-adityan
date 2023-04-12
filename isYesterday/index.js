"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isYesterday;

var _index = _interopRequireDefault(require("../isSameDay/index.js"));

var _index2 = _interopRequireDefault(require("../subDays/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(dirtyDate) {
  return (0, _index.default)(dirtyDate, (0, _index2.default)(Date.now(), 1));
}

module.exports = exports.default;
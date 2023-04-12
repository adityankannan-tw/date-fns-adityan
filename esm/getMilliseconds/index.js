import toDate from "../toDate/index.js";
/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param date - the given date
 * @returns the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */

export default function getMilliseconds(dirtyDate) {
  var date = toDate(dirtyDate);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}
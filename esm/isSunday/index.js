import toDate from "../toDate/index.js";
/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - the date to check
 * @returns the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */

export default function isSunday(dirtyDate) {
  return toDate(dirtyDate).getDay() === 0;
}
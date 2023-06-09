import endOfDay from "../endOfDay/index.js";
import endOfMonth from "../endOfMonth/index.js";
import toDate from "../toDate/index.js";
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - the date to check
 * @returns the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

export default function isLastDayOfMonth(dirtyDate) {
  var date = toDate(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
}
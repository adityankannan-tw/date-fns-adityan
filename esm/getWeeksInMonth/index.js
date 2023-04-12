import differenceInCalendarWeeks from "../differenceInCalendarWeeks/index.js";
import lastDayOfMonth from "../lastDayOfMonth/index.js";
import startOfMonth from "../startOfMonth/index.js";

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export default function getWeeksInMonth(date, options) {
  return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
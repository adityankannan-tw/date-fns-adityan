import toDate from "../toDate/index.js";
/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @param date - the given date
 * @returns the year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */

export default function getDecade(dirtyDate) {
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  return decade;
}
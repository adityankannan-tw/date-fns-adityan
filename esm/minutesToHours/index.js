import { minutesInHour } from "../constants/index.js";
/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - number of minutes to be converted
 *
 * @returns the number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */

export default function minutesToHours(minutes) {
  var hours = minutes / minutesInHour;
  return Math.floor(hours);
}
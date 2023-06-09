import { secondsInHour } from "../constants/index.js";
/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param seconds - number of seconds to be converted
 *
 * @returns the number of seconds converted in hours
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */

export default function secondsToHours(seconds) {
  var hours = seconds / secondsInHour;
  return Math.floor(hours);
}
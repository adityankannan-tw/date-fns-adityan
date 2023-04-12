import { millisecondsInSecond } from "../constants/index.js";
/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param seconds - number of seconds to be converted
 *
 * @returns the number of seconds converted in milliseconds
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */

export default function secondsToMilliseconds(seconds) {
  return seconds * millisecondsInSecond;
}
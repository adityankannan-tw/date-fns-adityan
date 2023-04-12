/* eslint-env mocha */
import assert from 'assert';
import endOfHour from "./index.js";
describe('endOfHour', function () {
  it('returns the date with the time set to the last millisecond before an hour ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = endOfHour(date);
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999));
  });
  it('accepts a timestamp', function () {
    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime());
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    endOfHour(date);
    assert.deepStrictEqual(date, new Date(2014, 11, 1, 22, 15));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfHour(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
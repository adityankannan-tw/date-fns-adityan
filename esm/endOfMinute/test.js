/* eslint-env mocha */
import assert from 'assert';
import endOfMinute from "./index.js";
describe('endOfMinute', function () {
  it('returns the date with the time set to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = endOfMinute(date);
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });
  it('accepts a timestamp', function () {
    var result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime());
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    endOfMinute(date);
    assert.deepStrictEqual(date, new Date(2014, 11, 1, 22, 15));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfMinute(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import startOfMonth from "./index.js";
describe('startOfMonth', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a month', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = startOfMonth(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = startOfMonth(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    startOfMonth(date);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfMonth(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
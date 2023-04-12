/* eslint-env mocha */
import assert from 'assert';
import startOfMinute from "./index.js";
describe('startOfMinute', function () {
  it('returns the date with the time set to the first millisecond of a minute', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    var result = startOfMinute(date);
    assert.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15).getTime();
    var result = startOfMinute(date);
    assert.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    startOfMinute(date);
    assert.deepStrictEqual(date, new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfMinute(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
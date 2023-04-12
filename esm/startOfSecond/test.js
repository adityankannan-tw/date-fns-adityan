/* eslint-env mocha */
import assert from 'assert';
import startOfSecond from "./index.js";
describe('startOfSecond', function () {
  it('returns the date with the time set to the first millisecond of a second', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    var result = startOfSecond(date);
    assert.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400).getTime();
    var result = startOfSecond(date);
    assert.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    startOfSecond(date);
    assert.deepStrictEqual(date, new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfSecond(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import startOfHour from "./index.js";
describe('startOfHour', function () {
  it('returns the date with the time set to the first millisecond of an hour', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55);
    var result = startOfHour(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 11));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55);
    startOfHour(date);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55).getTime();
    var result = startOfHour(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 11));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfHour(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
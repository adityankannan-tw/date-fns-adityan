/* eslint-env mocha */
import assert from 'assert';
import startOfDay from "./index.js";
describe('startOfDay', function () {
  it('returns the date with the time set to 00:00:00', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = startOfDay(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 0, 0, 0, 0));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = startOfDay(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 0, 0, 0, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    startOfDay(date);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfDay(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
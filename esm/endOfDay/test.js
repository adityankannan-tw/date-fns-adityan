/* eslint-env mocha */
import assert from 'assert';
import endOfDay from "./index.js";
describe('endOfDay', function () {
  it('returns the date with the time set to 23:59:59.999', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = endOfDay(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 23, 59, 59, 999));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = endOfDay(date);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 2, 23, 59, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    endOfDay(date);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfDay(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import startOfYear from "./index.js";
describe('startOfYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = startOfYear(date);
    assert.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 1, 0, 0, 0, 0));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = startOfYear(date);
    assert.deepStrictEqual(result, new Date(2014, 0
    /* Dec */
    , 1, 0, 0, 0, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    startOfYear(date);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0
    /* Jan */
    , 5);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(9, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfYear(initialDate);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfYear(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import setISOWeek from "./index.js";
describe('setISOWeek', function () {
  it('sets the ISO week', function () {
    var result = setISOWeek(new Date(2004, 7
    /* Aug */
    , 7), 53);
    assert.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = setISOWeek(new Date(2009, 11
    /* Dec */
    , 2).getTime(), 1);
    assert.deepStrictEqual(result, new Date(2008, 11
    /* Dec */
    , 31));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    setISOWeek(date, 52);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0
    /* Jan */
    , 4);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11
    /* Dec */
    , 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = setISOWeek(initialDate, 52);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setISOWeek(new Date(NaN), 53);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setISOWeek(new Date(2004, 7
    /* Aug */
    , 7), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
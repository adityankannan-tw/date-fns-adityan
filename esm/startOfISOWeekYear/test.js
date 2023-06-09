/* eslint-env mocha */
import assert from 'assert';
import startOfISOWeekYear from "./index.js";
describe('startOfISOWeekYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO year', function () {
    var result = startOfISOWeekYear(new Date(2009, 0
    /* Jan */
    , 1, 16, 0));
    assert.deepStrictEqual(result, new Date(2008, 11
    /* Dec */
    , 29, 0, 0, 0, 0));
  });
  it('accepts a timestamp', function () {
    var result = startOfISOWeekYear(new Date(2005, 0
    /* Jan */
    , 1, 6, 0).getTime());
    assert.deepStrictEqual(result, new Date(2003, 11
    /* Dec */
    , 29, 0, 0, 0, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    startOfISOWeekYear(date);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0
    /* Jan */
    , 1);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11
    /* Dec */
    , 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfISOWeekYear(initialDate);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('correctly handles years in which 4 January is Sunday', function () {
    var result = startOfISOWeekYear(new Date(2009, 6
    /* Jul */
    , 2));
    assert.deepStrictEqual(result, new Date(2008, 11
    /* Dec */
    , 29));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfISOWeekYear(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
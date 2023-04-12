/* eslint-env mocha */
import assert from 'assert';
import setWeekYear from "./index.js";
describe('setWeekYear', function () {
  it('sets the local week-numbering year, saving the week and the day of the week', function () {
    var result = setWeekYear(new Date(2010, 0
    /* Jan */
    , 2), 2004);
    assert.deepStrictEqual(result, new Date(2004, 0
    /* Jan */
    , 3));
  });
  it('accepts a timestamp', function () {
    var result = setWeekYear(new Date(2008, 11
    /* Dec */
    , 29).getTime(), 2007);
    assert.deepStrictEqual(result, new Date(2007, 0
    /* Jan */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2008, 11
    /* Dec */
    , 29);
    setWeekYear(date, 2000);
    assert.deepStrictEqual(date, new Date(2008, 11
    /* Dec */
    , 29));
  });
  it('sets local week-numbering years less than 100', function () {
    var initialDate = new Date(2008, 11
    /* Dec */
    , 29);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = setWeekYear(initialDate, 7);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(8, 11
    /* Dec */
    , 29);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = setWeekYear(initialDate, 7);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setWeekYear(new Date(NaN), 2007);
    assert(result instanceof Date && isNaN(result.getDate()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setWeekYear(new Date(2008, 11
    /* Dec */
    , 29), NaN);
    assert(result instanceof Date && isNaN(result.getDate()));
  });
  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2010, 0
    /* Jan */
    , 2);
    var result = setWeekYear(date, 2004, {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    });
    assert.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 1));
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2010, 0
    /* Jan */
    , 2);
    var result = setWeekYear(date, 2004, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      }
    });
    assert.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 1));
  });
});
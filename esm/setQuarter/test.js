/* eslint-env mocha */
import assert from 'assert';
import setQuarter from "./index.js";
describe('setQuarter', function () {
  it('sets the quarter of the year', function () {
    var result = setQuarter(new Date(2014, 6
    /* Jul */
    , 2), 1);
    assert.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 2));
  });
  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    var result = setQuarter(new Date(2014, 10
    /* Nov */
    , 30), 1);
    assert.deepStrictEqual(result, new Date(2014, 1
    /* Feb */
    , 28));
  });
  it('accepts a timestamp', function () {
    var result = setQuarter(new Date(2014, 6
    /* Jul */
    , 1).getTime(), 4);
    assert.deepStrictEqual(result, new Date(2014, 9
    /* Oct */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 1);
    setQuarter(date, 2);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 1));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 10
    /* Nov */
    , 30);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1
    /* Feb */
    , 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = setQuarter(initialDate, 1);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setQuarter(new Date(NaN), 1);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setQuarter(new Date(2014, 6
    /* Jul */
    , 2), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
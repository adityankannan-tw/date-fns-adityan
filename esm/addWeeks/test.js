/* eslint-env mocha */
import assert from 'assert';
import addWeeks from "./index.js";
describe('addWeeks', function () {
  it('adds the given number of weeks', function () {
    var result = addWeeks(new Date(2014, 8
    /* Sep */
    , 1), 4);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 29));
  });
  it('accepts a timestamp', function () {
    var result = addWeeks(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 1);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 8));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    addWeeks(date, 2);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addWeeks(new Date(NaN), 4);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addWeeks(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
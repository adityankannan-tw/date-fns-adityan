/* eslint-env mocha */
import assert from 'assert';
import setMinutes from "./index.js";
describe('setMinutes', function () {
  it('sets the minutes', function () {
    var result = setMinutes(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40), 45);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 45, 40));
  });
  it('accepts a timestamp', function () {
    var result = setMinutes(new Date(2014, 8
    /* Sep */
    , 1, 11, 30).getTime(), 5);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 5));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1, 11, 30);
    setMinutes(date, 15);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1, 11, 30));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setMinutes(new Date(NaN), 45);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setMinutes(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import addMilliseconds from "./index.js";
describe('addMilliseconds', function () {
  it('adds the given number of milliseconds', function () {
    var result = addMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), 750);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 750));
  });
  it('accepts a timestamp', function () {
    var result = addMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0).getTime(), 500);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 500));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0);
    addMilliseconds(date, 250);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addMilliseconds(new Date(NaN), 750);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
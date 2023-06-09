/* eslint-env mocha */
import assert from 'assert';
import subMilliseconds from "./index.js";
describe('subMilliseconds', function () {
  it('subtracts the given number of milliseconds', function () {
    var result = subMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), 750);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 29, 250));
  });
  it('accepts a timestamp', function () {
    var result = subMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0).getTime(), 500);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 29, 500));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0);
    subMilliseconds(date, 250);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subMilliseconds(new Date(NaN), 750);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subMilliseconds(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
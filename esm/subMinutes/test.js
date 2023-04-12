/* eslint-env mocha */
import assert from 'assert';
import subMinutes from "./index.js";
describe('subMinutes', function () {
  it('subtracts the given number of minutes', function () {
    var result = subMinutes(new Date(2014, 6
    /* Jul */
    , 10, 12, 0), 30);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 11, 30));
  });
  it('accepts a timestamp', function () {
    var result = subMinutes(new Date(2014, 6
    /* Jul */
    , 10, 12, 0).getTime(), 20);
    assert.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 11, 40));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 0);
    subMinutes(date, 25);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subMinutes(new Date(NaN), 30);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subMinutes(new Date(2014, 6
    /* Jul */
    , 10, 12, 0), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
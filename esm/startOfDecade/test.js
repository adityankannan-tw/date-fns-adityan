/* eslint-env mocha */
import assert from 'assert';
import startOfDecade from "./index.js";
describe('startOfDecade', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', function () {
    var date = new Date(1953, 3
    /* Apr */
    , 13);
    var result = startOfDecade(date);
    assert.deepStrictEqual(result, new Date(1950, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var date = new Date(1984, 9
    /* Oct */
    , 14).getTime();
    var result = startOfDecade(date);
    assert.deepStrictEqual(result, new Date(1980, 0
    /* Jan */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(1978, 10
    /* Nov */
    , 14);
    startOfDecade(date);
    assert.deepStrictEqual(date, new Date(1978, 10
    /* Nov */
    , 14));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfDecade(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
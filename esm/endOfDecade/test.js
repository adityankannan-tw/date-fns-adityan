/* eslint-env mocha */
import assert from 'assert';
import endOfDecade from "./index.js";
describe('endOfDecade', function () {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade', function () {
    var date = new Date(2017, 3
    /* Apr */
    , 10, 0, 0, 0);
    var result = endOfDecade(date);
    assert.deepStrictEqual(result, new Date(2019, 11
    /* Dec */
    , 31, 23, 59, 59, 999));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2007, 9
    /* Oct */
    , 10, 0, 0, 0).getTime();
    var result = endOfDecade(date);
    assert.deepStrictEqual(result, new Date(2009, 11
    /* Dec */
    , 31, 23, 59, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2038, 0
    /* Jan */
    , 19, 3, 14, 8);
    endOfDecade(date);
    assert.deepStrictEqual(date, new Date(2038, 0
    /* Jan */
    , 19, 3, 14, 8));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfDecade(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
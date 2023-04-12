/* eslint-env mocha */
import assert from 'assert';
import max from "./index.js";
describe('max', function () {
  var isInvalidDate = function isInvalidDate(date) {
    return date instanceof Date && isNaN(date.getTime());
  };

  it('returns the latest date', function () {
    var result = max([new Date(1989, 6
    /* Jul */
    , 10), new Date(1987, 1
    /* Feb */
    , 11)]);
    assert.deepStrictEqual(result, new Date(1989, 6
    /* Jul */
    , 10));
  });
  it('accepts array with more than 2 entries', function () {
    var result = max([new Date(1987, 1
    /* Feb */
    , 11), new Date(1989, 6
    /* Jul */
    , 10), new Date(1995, 6
    /* Jul */
    , 2), new Date(1990, 0
    /* Jan */
    , 1)]);
    assert.deepStrictEqual(result, new Date(1995, 6
    /* Jul */
    , 2));
  });
  it('accepts timestamps', function () {
    var result = max([new Date(1989, 6
    /* Jul */
    , 10).getTime(), new Date(1987, 1
    /* Feb */
    , 11).getTime()]);
    assert.deepStrictEqual(result, new Date(1989, 6
    /* Jul */
    , 10));
  });
  it('returns `Invalid Date` if any given date is invalid', function () {
    var result = max([new Date(1989, 6
    /* Jul */
    , 10), new Date(NaN), new Date(1987, 1
    /* Feb */
    , 11)]);
    assert(isInvalidDate(result));
  });
  it('returns `Invalid Date` for empty array', function () {
    var result = max([]);
    assert(isInvalidDate(result));
  });
});
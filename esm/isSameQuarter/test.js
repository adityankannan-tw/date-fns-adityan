/* eslint-env mocha */
import assert from 'assert';
import isSameQuarter from "./index.js";
describe('isSameQuarter', function () {
  it('returns true if the given dates have the same quarter (and year)', function () {
    var result = isSameQuarter(new Date(2014, 0
    /* Jan */
    , 1), new Date(2014, 2
    /* Mar */
    , 8));
    assert(result === true);
  });
  it('returns false if the given dates have different quarters', function () {
    var result = isSameQuarter(new Date(2014, 0
    /* Jan */
    , 1), new Date(2013, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isSameQuarter(new Date(2014, 6
    /* Jul */
    , 2).getTime(), new Date(2014, 8
    /* Sep */
    , 25).getTime());
    assert(result === true);
  });
  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameQuarter(new Date(NaN), new Date(1989, 6
    /* Jul */
    , 10));
    assert(result === false);
  });
  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameQuarter(new Date(1987, 1
    /* Feb */
    , 11), new Date(NaN));
    assert(result === false);
  });
  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameQuarter(new Date(NaN), new Date(NaN));
    assert(result === false);
  });
});
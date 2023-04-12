/* eslint-env mocha */
import assert from 'assert';
import isWednesday from "./index.js";
describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = isWednesday(new Date(2014, 8
    /* Sep */
    , 24));
    assert(result === true);
  });
  it('returns false if the given date is not Wednesday', function () {
    var result = isWednesday(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isWednesday(new Date(2014, 1
    /* Feb */
    , 12).getTime());
    assert(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = isWednesday(new Date(NaN));
    assert(result === false);
  });
});
/* eslint-env mocha */
import assert from 'assert';
import isFriday from "./index.js";
describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = isFriday(new Date(2014, 8
    /* Sep */
    , 26));
    assert(result === true);
  });
  it('returns false if the given date is not Friday', function () {
    var result = isFriday(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isFriday(new Date(2014, 1
    /* Feb */
    , 14).getTime());
    assert(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = isFriday(new Date(NaN));
    assert(result === false);
  });
});
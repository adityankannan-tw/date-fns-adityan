/* eslint-env mocha */
import assert from 'assert';
import isMonday from "./index.js";
describe('isMonday', function () {
  it('returns true if the given date is Monday', function () {
    var result = isMonday(new Date(2014, 8
    /* Sep */
    , 22));
    assert(result === true);
  });
  it('returns false if the given date is not Monday', function () {
    var result = isMonday(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isMonday(new Date(2014, 1
    /* Feb */
    , 10).getTime());
    assert(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = isMonday(new Date(NaN));
    assert(result === false);
  });
});
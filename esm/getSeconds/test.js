/* eslint-env mocha */
import assert from 'assert';
import getSeconds from "./index.js";
describe('getSeconds', function () {
  it('returns the seconds of the given date', function () {
    var result = getSeconds(new Date(2012, 1
    /* Feb */
    , 29, 11, 45, 5, 123));
    assert(result === 5);
  });
  it('accepts a timestamp', function () {
    var result = getSeconds(new Date(2014, 3
    /* Apr */
    , 2, 23, 30, 42).getTime());
    assert(result === 42);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = getSeconds(new Date(NaN));
    assert(isNaN(result));
  });
});
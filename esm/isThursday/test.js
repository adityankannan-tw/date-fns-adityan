/* eslint-env mocha */
import assert from 'assert';
import isThursday from "./index.js";
describe('isThursday', function () {
  it('returns true if the given date is Thursday', function () {
    var result = isThursday(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === true);
  });
  it('returns false if the given date is not Thursday', function () {
    var result = isThursday(new Date(2014, 8
    /* Sep */
    , 24));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isThursday(new Date(2014, 1
    /* Feb */
    , 13).getTime());
    assert(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = isThursday(new Date(NaN));
    assert(result === false);
  });
});
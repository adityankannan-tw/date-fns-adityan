/* eslint-env mocha */
import assert from 'assert';
import getDay from "./index.js";
describe('getDay', function () {
  it('returns the day of the week of the given date', function () {
    var result = getDay(new Date(2012, 1
    /* Feb */
    , 29));
    assert(result === 3);
  });
  it('accepts a timestamp', function () {
    var result = getDay(new Date(2014, 5
    /* Jun */
    , 1).getTime());
    assert(result === 0);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = getDay(new Date(NaN));
    assert(isNaN(result));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import getISODay from "./index.js";
describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = getISODay(new Date(2012, 1
    /* Feb */
    , 29));
    assert(result === 3);
  });
  it('returns 7 if the given day is Sunday', function () {
    var result = getISODay(new Date(2014, 5
    /* Jun */
    , 1));
    assert(result === 7);
  });
  it('accepts a timestamp', function () {
    var result = getISODay(new Date(2014, 5
    /* Jun */
    , 1).getTime());
    assert(result === 7);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = getISODay(new Date(NaN));
    assert(isNaN(result));
  });
});
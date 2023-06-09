/* eslint-env mocha */
import assert from 'assert';
import isLastDayOfMonth from "./index.js";
describe('isLastDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = isLastDayOfMonth(new Date(2014, 9
    /* Oct */
    , 31));
    assert(result === true);
  });
  it('returns false if the given date is not in the last day of month', function () {
    var result = isLastDayOfMonth(new Date(2014, 9
    /* Oct */
    , 30));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 9
    /* Oct */
    , 31).getTime();
    var result = isLastDayOfMonth(date);
    assert(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = isLastDayOfMonth(new Date(NaN));
    assert(result === false);
  });
});
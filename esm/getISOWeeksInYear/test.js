/* eslint-env mocha */
import assert from 'assert';
import getISOWeeksInYear from "./index.js";
describe('getISOWeeksInYear', function () {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', function () {
    var result = getISOWeeksInYear(new Date(2015, 1
    /* Feb */
    , 11));
    assert(result === 53);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2003, 11
    /* Dec */
    , 30).getTime();
    var result = getISOWeeksInYear(date);
    assert(result === 53);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0
    /* Jan */
    , 4);
    initialDate.setHours(0, 0, 0, 0);
    var result = getISOWeeksInYear(initialDate);
    assert(result === 53);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = getISOWeeksInYear(new Date(NaN));
    assert(isNaN(result));
  });
});
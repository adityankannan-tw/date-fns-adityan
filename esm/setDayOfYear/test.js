/* eslint-env mocha */
import assert from 'assert';
import setDayOfYear from "./index.js";
describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = setDayOfYear(new Date(2014, 6
    /* Jul */
    , 2), 2);
    assert.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 2));
  });
  it('accepts a timestamp', function () {
    var result = setDayOfYear(new Date(2014, 6
    /* Jul */
    , 2).getTime(), 60);
    assert.deepStrictEqual(result, new Date(2014, 2
    /* Mar */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    setDayOfYear(date, 365);
    assert.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setDayOfYear(new Date(NaN), 2);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setDayOfYear(new Date(2014, 6
    /* Jul */
    , 2), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
/* eslint-env mocha */
import assert from 'assert';
import addBusinessDays from "./index.js";
describe('addBusinessDays', function () {
  it('adds the given number of business days', function () {
    var result = addBusinessDays(new Date(2014, 8
    /* Sep */
    , 1), 10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 15));
  });
  it('handles negative amount', function () {
    var result = addBusinessDays(new Date(2014, 8
    /* Sep */
    , 15), -10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns the Monday when 1 day is added on the Friday', function () {
    assert.deepStrictEqual(addBusinessDays(new Date(2020, 0
    /* Jan */
    , 10), 1), // Friday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('returns the Monday when 1 day is added on the Satuday', function () {
    assert.deepStrictEqual(addBusinessDays(new Date(2020, 0
    /* Jan */
    , 11), 1), // Saturday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('returns the Monday when 1 day is added on the Sunday', function () {
    assert.deepStrictEqual(addBusinessDays(new Date(2020, 0
    /* Jan */
    , 12), 1), // Sunday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500
      /* 500 ms test timeout */
      );
    }

    var result = addBusinessDays(new Date(2014, 0
    /* Jan */
    , 1), 3387885);
    assert.deepStrictEqual(result, new Date(15000, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = addBusinessDays(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 15));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    addBusinessDays(date, 11);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addBusinessDays(new Date(NaN), 10);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addBusinessDays(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('starting from a weekend day should land on a weekday when reducing a divisible by 5', function () {
    var substractResult = addBusinessDays(new Date(2019, 7, 18), -5);
    assert.deepStrictEqual(substractResult, new Date(2019, 7, 12));
    var subtractResultWeekend = addBusinessDays(new Date(2019, 7, 17), -5);
    assert.deepStrictEqual(subtractResultWeekend, new Date(2019, 7, 12));
    var addResult = addBusinessDays(new Date(2019, 7, 18), 5);
    assert.deepStrictEqual(addResult, new Date(2019, 7, 23));
    var addResultWeekend = addBusinessDays(new Date(2019, 7, 17), 5);
    assert.deepStrictEqual(addResultWeekend, new Date(2019, 7, 23));
  });
});
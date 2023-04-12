/* eslint-env mocha */
import assert from 'assert';
import subBusinessDays from "./index.js";
describe('subBusinessDays', function () {
  it('substract the given number of business days', function () {
    var result = subBusinessDays(new Date(2014, 8
    /* Sep */
    , 1), 10);
    assert.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 18));
  });
  it('handles negative amount', function () {
    var result = subBusinessDays(new Date(2014, 7
    /* Sep */
    , 18), -10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500
      /* 500 ms test timeout */
      );
    }

    var result = subBusinessDays(new Date(15000, 0
    /* Jan */
    , 1), 3387885);
    assert.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = subBusinessDays(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);
    assert.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 18));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    subBusinessDays(date, 11);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subBusinessDays(new Date(NaN), 10);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subBusinessDays(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
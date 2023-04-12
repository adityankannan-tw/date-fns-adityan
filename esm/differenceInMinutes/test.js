/* eslint-env mocha */
import assert from 'assert';
import differenceInMinutes from "./index.js";
describe('differenceInMinutes', function () {
  it('returns the number of minutes between the given dates', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 20), new Date(2014, 6
    /* Jul */
    , 2, 12, 6));
    assert(result === 14);
  });
  it('returns the number of minutes between the given dates with `trunc` as a default rounding method', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 6, 50), new Date(2014, 6
    /* Jul */
    , 2, 12, 20, 10));
    assert(result === -13);
  });
  it('returns the number of minutes between the given dates with `trunc` passed in as a rounding method ', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 20, 50), new Date(2014, 6
    /* Jul */
    , 2, 12, 6, 10), {
      roundingMethod: 'trunc'
    });
    assert(result === 14);
  });
  it('returns the number of minutes between the given dates with `ceil` passed in as a rounding method ', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 20, 50), new Date(2014, 6
    /* Jul */
    , 2, 12, 6, 10), {
      roundingMethod: 'ceil'
    });
    assert(result === 15);
  });
  it('returns the number of minutes between the given dates with `floor` passed in as a rounding method ', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 20, 50), new Date(2014, 6
    /* Jul */
    , 2, 12, 6, 10), {
      roundingMethod: 'floor'
    });
    assert(result === 14);
  });
  it('returns the number of minutes between the given dates with `round` passed in as a rounding method ', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 20, 60), new Date(2014, 6
    /* Jul */
    , 2, 12, 6, 10), {
      roundingMethod: 'round'
    });
    assert(result === 15);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = differenceInMinutes(new Date(2014, 6
    /* Jul */
    , 2, 12, 6), new Date(2014, 6
    /* Jul */
    , 2, 12, 20));
    assert(result === -14);
  });
  it('accepts timestamps', function () {
    var result = differenceInMinutes(new Date(2014, 8
    /* Sep */
    , 5, 18, 45).getTime(), new Date(2014, 8
    /* Sep */
    , 5, 18, 15).getTime());
    assert(result === 30);
  });
  describe('edge cases', function () {
    it('the difference is less than a minute, but the given dates are in different calendar minutes', function () {
      var result = differenceInMinutes(new Date(2014, 8
      /* Sep */
      , 5, 12, 12), new Date(2014, 8
      /* Sep */
      , 5, 12, 11, 59));
      assert(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = differenceInMinutes(new Date(2014, 8
      /* Sep */
      , 5, 12, 11, 59), new Date(2014, 8
      /* Sep */
      , 5, 12, 12));
      assert(result === 0);
    });
    it('the difference is an integral number of minutes', function () {
      var result = differenceInMinutes(new Date(2014, 8
      /* Sep */
      , 5, 12, 25), new Date(2014, 8
      /* Sep */
      , 5, 12, 15));
      assert(result === 10);
    });
    it('the given dates are the same', function () {
      var result = differenceInMinutes(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      assert(result === 0);
    });
    it('does not return -0 when the given dates are the same', function () {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0;
      }

      var result = differenceInMinutes(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      var resultIsNegative = isNegativeZero(result);
      assert(resultIsNegative === false);
    });
  });
  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = differenceInMinutes(new Date(NaN), new Date(2017, 0
    /* Jan */
    , 1));
    assert(isNaN(result));
  });
  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = differenceInMinutes(new Date(2017, 0
    /* Jan */
    , 1), new Date(NaN));
    assert(isNaN(result));
  });
  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = differenceInMinutes(new Date(NaN), new Date(NaN));
    assert(isNaN(result));
  });
});
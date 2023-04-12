/* eslint-env mocha */
import assert from 'assert';
import eachHourOfInterval from "./index.js";
describe('eachHourOfInterval', function () {
  it('returns an array with starts of hours from the hour of the start date to the hour of the end date', function () {
    var result = eachHourOfInterval({
      start: new Date(2014, 9
      /* Oct */
      , 6, 12),
      end: new Date(2014, 9
      /* Oct */
      , 6, 15)
    });
    assert.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 6, 12), new Date(2014, 9
    /* Oct */
    , 6, 13), new Date(2014, 9
    /* Oct */
    , 6, 14), new Date(2014, 9
    /* Oct */
    , 6, 15)]);
  });
  it('accepts timestamps', function () {
    var result = eachHourOfInterval({
      start: new Date(2014, 9
      /* Oct */
      , 6, 12).getTime(),
      end: new Date(2014, 9
      /* Oct */
      , 6, 15).getTime()
    });
    assert.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 6, 12), new Date(2014, 9
    /* Oct */
    , 6, 13), new Date(2014, 9
    /* Oct */
    , 6, 14), new Date(2014, 9
    /* Oct */
    , 6, 15)]);
  });
  it('handles the hours that are not starts of hours', function () {
    var result = eachHourOfInterval({
      start: new Date(2014, 9
      /* Oct */
      , 6, 12, 59, 59, 999),
      end: new Date(2014, 9
      /* Oct */
      , 6, 15, 59, 59, 999)
    });
    assert.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 6, 12), new Date(2014, 9
    /* Oct */
    , 6, 13), new Date(2014, 9
    /* Oct */
    , 6, 14), new Date(2014, 9
    /* Oct */
    , 6, 15)]);
  });
  it('returns one hour if the both arguments are on the same hour', function () {
    var result = eachHourOfInterval({
      start: new Date(2014, 9
      /* Oct */
      , 6, 12, 35),
      end: new Date(2014, 9
      /* Oct */
      , 6, 12, 47)
    });
    assert.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 6, 12)]);
  });
  it('returns one hour if the both arguments are the same', function () {
    var result = eachHourOfInterval({
      start: new Date(2014, 9
      /* Oct */
      , 6, 12, 35),
      end: new Date(2014, 9
      /* Oct */
      , 6, 12, 35)
    });
    assert.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 6, 12)]);
  });
  it('throws an exception if the start date is after the end date', function () {
    var block = eachHourOfInterval.bind(null, {
      start: new Date(2014, 9
      /* Oct */
      , 12, 35, 0, 0, 1),
      end: new Date(2014, 9
      /* Oct */
      , 12, 35, 0, 0, 0)
    });
    assert.throws(block, RangeError);
  });
  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = eachHourOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9
      /* Oct */
      , 6, 12)
    });
    assert.throws(block, RangeError);
  });
  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = eachHourOfInterval.bind(null, {
      start: new Date(2014, 9
      /* Oct */
      , 12, 12),
      end: new Date(NaN)
    });
    assert.throws(block, RangeError);
  });
  describe('options.step', function () {
    var interval = {
      start: new Date(2014, 9
      /* Oct */
      , 6, 12),
      end: new Date(2014, 9
      /* Oct */
      , 6, 18)
    };
    var stepError = /^RangeError: `options.step` must be a number greater than 1$/;
    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', function () {
      var result = eachHourOfInterval(interval, {
        step: 3
      });
      assert.deepStrictEqual(result, [new Date(2014, 9
      /* Oct */
      , 6, 12), new Date(2014, 9
      /* Oct */
      , 6, 15), new Date(2014, 9
      /* Oct */
      , 6, 18)]);
    });
    it('throws RangeError error if `options.step` is less than 1', function () {
      assert.throws(function () {
        return eachHourOfInterval(interval, {
          step: 0
        });
      }, stepError);
      assert.throws(function () {
        return eachHourOfInterval(interval, {
          step: -3
        });
      }, stepError);
    });
    it('throws RangeError error if `options.step` is NaN', function () {
      assert.throws(function () {
        return eachHourOfInterval(interval, {
          step: NaN
        });
      }, stepError);
      assert.throws(function () {
        return eachHourOfInterval(interval, {
          step: NaN
        });
      }, stepError);
    });
  });
});
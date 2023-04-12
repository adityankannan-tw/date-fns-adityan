/* eslint-env mocha */
import assert from 'assert';
import eachMinuteOfInterval from "./index.js";
describe('eachMinuteOfInterval', function () {
  it('should return an array of Date objects containing a Date for each minute between the interval', function () {
    var result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0),
      end: new Date(2020, 10, 14, 13, 5)
    });
    assert.deepStrictEqual(result, [new Date(2020, 10, 14, 13, 0), new Date(2020, 10, 14, 13, 1), new Date(2020, 10, 14, 13, 2), new Date(2020, 10, 14, 13, 3), new Date(2020, 10, 14, 13, 4), new Date(2020, 10, 14, 13, 5)]);
  });
  it('should handle all the minutes that are not in the begining', function () {
    var result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0, 33),
      end: new Date(2020, 10, 14, 13, 2)
    });
    assert.deepStrictEqual(result[0], new Date(2020, 10, 14, 13));
    assert.deepStrictEqual(result[2], new Date(2020, 10, 14, 13, 2));
  });
  it('should accept timestamps', function () {
    var start = new Date(2020, 10, 14, 13, 0).getTime();
    var end = new Date(2020, 10, 14, 13, 2).getTime();
    var result = eachMinuteOfInterval({
      start: start,
      end: end
    });
    assert.deepStrictEqual(result, [new Date(2020, 10, 14, 13, 0), new Date(2020, 10, 14, 13, 1), new Date(2020, 10, 14, 13, 2)]);
  });
  it('throws an exception if the start date is after the end date', function () {
    var block = eachMinuteOfInterval.bind(null, {
      start: new Date(2014, 10, 14, 10),
      end: new Date(2014, 10, 14, 5)
    });
    assert.throws(block, RangeError);
  });
  it('treats intervals shorter than a minute as valid', function () {
    var block = eachMinuteOfInterval.bind(null, {
      start: new Date(2014, 10, 14, 10, 1, 0),
      end: new Date(2014, 10, 14, 10, 1, 1)
    });
    assert.doesNotThrow(block, RangeError);
  });
  describe('options.step', function () {
    var interval = {
      start: new Date(2020, 9, 14, 13, 1),
      end: new Date(2020, 9, 14, 13, 7)
    };
    var stepError = /^RangeError: `options.step` must be a number equal to or greater than 1$/;
    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', function () {
      var result = eachMinuteOfInterval(interval, {
        step: 3
      });
      assert.deepStrictEqual(result, [new Date(2020, 9, 14, 13, 1), new Date(2020, 9, 14, 13, 4), new Date(2020, 9, 14, 13, 7)]);
    });
    it('throws RangeError error if `options.step` is less than 1', function () {
      assert.throws(function () {
        return eachMinuteOfInterval(interval, {
          step: 0
        });
      }, stepError);
      assert.throws(function () {
        return eachMinuteOfInterval(interval, {
          step: -3
        });
      }, stepError);
    });
    it('throws RangeError error if `options.step` is NaN', function () {
      assert.throws(function () {
        return eachMinuteOfInterval(interval, {
          step: NaN
        });
      }, stepError);
      assert.throws(function () {
        return eachMinuteOfInterval(interval, {
          step: NaN
        });
      }, stepError);
    });
  });
});
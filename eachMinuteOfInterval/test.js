"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachMinuteOfInterval', function () {
  it('should return an array of Date objects containing a Date for each minute between the interval', function () {
    var result = (0, _index.default)({
      start: new Date(2020, 10, 14, 13, 0),
      end: new Date(2020, 10, 14, 13, 5)
    });

    _assert.default.deepStrictEqual(result, [new Date(2020, 10, 14, 13, 0), new Date(2020, 10, 14, 13, 1), new Date(2020, 10, 14, 13, 2), new Date(2020, 10, 14, 13, 3), new Date(2020, 10, 14, 13, 4), new Date(2020, 10, 14, 13, 5)]);
  });
  it('should handle all the minutes that are not in the begining', function () {
    var result = (0, _index.default)({
      start: new Date(2020, 10, 14, 13, 0, 33),
      end: new Date(2020, 10, 14, 13, 2)
    });

    _assert.default.deepStrictEqual(result[0], new Date(2020, 10, 14, 13));

    _assert.default.deepStrictEqual(result[2], new Date(2020, 10, 14, 13, 2));
  });
  it('should accept timestamps', function () {
    var start = new Date(2020, 10, 14, 13, 0).getTime();
    var end = new Date(2020, 10, 14, 13, 2).getTime();
    var result = (0, _index.default)({
      start: start,
      end: end
    });

    _assert.default.deepStrictEqual(result, [new Date(2020, 10, 14, 13, 0), new Date(2020, 10, 14, 13, 1), new Date(2020, 10, 14, 13, 2)]);
  });
  it('throws an exception if the start date is after the end date', function () {
    var block = _index.default.bind(null, {
      start: new Date(2014, 10, 14, 10),
      end: new Date(2014, 10, 14, 5)
    });

    _assert.default.throws(block, RangeError);
  });
  it('treats intervals shorter than a minute as valid', function () {
    var block = _index.default.bind(null, {
      start: new Date(2014, 10, 14, 10, 1, 0),
      end: new Date(2014, 10, 14, 10, 1, 1)
    });

    _assert.default.doesNotThrow(block, RangeError);
  });
  describe('options.step', function () {
    var interval = {
      start: new Date(2020, 9, 14, 13, 1),
      end: new Date(2020, 9, 14, 13, 7)
    };
    var stepError = /^RangeError: `options.step` must be a number equal to or greater than 1$/;
    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', function () {
      var result = (0, _index.default)(interval, {
        step: 3
      });

      _assert.default.deepStrictEqual(result, [new Date(2020, 9, 14, 13, 1), new Date(2020, 9, 14, 13, 4), new Date(2020, 9, 14, 13, 7)]);
    });
    it('throws RangeError error if `options.step` is less than 1', function () {
      _assert.default.throws(function () {
        return (0, _index.default)(interval, {
          step: 0
        });
      }, stepError);

      _assert.default.throws(function () {
        return (0, _index.default)(interval, {
          step: -3
        });
      }, stepError);
    });
    it('throws RangeError error if `options.step` is NaN', function () {
      _assert.default.throws(function () {
        return (0, _index.default)(interval, {
          step: NaN
        });
      }, stepError);

      _assert.default.throws(function () {
        return (0, _index.default)(interval, {
          step: NaN
        });
      }, stepError);
    });
  });
});
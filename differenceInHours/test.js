"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInHours', function () {
  it('returns the number of hours between the given dates with `trunc` as a default rounding method', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2, 6, 0, 29), new Date(2014, 6
    /* Jul */
    , 2, 20, 0, 28.973));
    (0, _assert.default)(result === -13);
  });
  it('returns the number of hours between the given dates', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2, 20, 0), new Date(2014, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 14);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2, 6, 0), new Date(2014, 6
    /* Jul */
    , 2, 20, 0));
    (0, _assert.default)(result === -14);
  });
  it('returns a 0, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28.973), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28.976));
    (0, _assert.default)(result === 0);
  });
  it('returns 2 with a rounding method of `ceil`, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 7, 1, 29, 976), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28, 173), {
      roundingMethod: 'ceil'
    });
    (0, _assert.default)(result === 2);
  });
  it('returns 1 with a rounding method of `floor`, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 7, 1, 29, 976), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28, 173), {
      roundingMethod: 'floor'
    });
    (0, _assert.default)(result === 1);
  });
  it('returns 1 with a rounding method of `round`, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 7, 1, 29, 976), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28, 173), {
      roundingMethod: 'round'
    });
    (0, _assert.default)(result === 1);
  });
  it('returns 1 with a rounding method of `trunc`, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 7, 1, 29, 976), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28, 173), {
      roundingMethod: 'trunc'
    });
    (0, _assert.default)(result === 1);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 5, 18, 0).getTime(), new Date(2014, 8
    /* Sep */
    , 5, 6, 0).getTime());
    (0, _assert.default)(result === 12);
  });
  describe('edge cases', function () {
    it('the difference is less than an hour, but the given dates are in different calendar hours', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 12), new Date(2014, 8
      /* Sep */
      , 5, 11, 59));
      (0, _assert.default)(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 11, 59), new Date(2014, 8
      /* Sep */
      , 5, 12));
      (0, _assert.default)(result === 0);
    });
    it('the difference is an integral number of hours', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 13, 0), new Date(2014, 8
      /* Sep */
      , 5, 12, 0));
      (0, _assert.default)(result === 1);
    });
    it('the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      (0, _assert.default)(result === 0);
    });
    it('does not return -0 when the given dates are the same', function () {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0;
      }

      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      var resultIsNegative = isNegativeZero(result);
      (0, _assert.default)(resultIsNegative === false);
    });
  });
  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(2017, 0
    /* Jan */
    , 1));
    (0, _assert.default)(isNaN(result));
  });
  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(2017, 0
    /* Jan */
    , 1), new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
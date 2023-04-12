"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInQuarters', function () {
  it('returns the number of full quarters between the given dates  with `trunc` as a default rounding method', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 5, 0), new Date(2011, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 3);
  });
  it('returns the number of full quarters between the given dates', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 4);
  });
  it('returns the number of full quarters between the given dates with `trunc` as a default rounding method', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 4
    /* May */
    , 2, 6, 0));
    (0, _assert.default)(result === 4);
  });
  it('returns the number of full quarters between the given dates with `ceil` as a rounding method', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 4
    /* May */
    , 2, 6, 0), {
      roundingMethod: 'ceil'
    });
    (0, _assert.default)(result === 5);
  });
  it('returns the number of full quarters between the given dates with `floor` as a rounding method', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 4
    /* May */
    , 2, 6, 0), {
      roundingMethod: 'floor'
    });
    (0, _assert.default)(result === 4);
  });
  it('returns the number of full quarters between the given dates with `round` as a rounding method', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 4
    /* May */
    , 2, 6, 0), {
      roundingMethod: 'round'
    });
    (0, _assert.default)(result === 5);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2011, 6
    /* Jul */
    , 2, 6, 0), new Date(2012, 6
    /* Jul */
    , 2, 18, 0));
    (0, _assert.default)(result === -4);
  });
  it('returns a 0, not a negative 0 - issue #2555 ', function () {
    var result = (0, _index.default)(new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28.973), new Date(2021, 6
    /* Jul */
    , 22, 6, 1, 28.976));
    (0, _assert.default)(Object.is(result, 0));
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 2).getTime(), new Date(2010, 6
    /* Jul */
    , 2).getTime());
    (0, _assert.default)(result === 17);
  });
  describe('edge cases', function () {
    it('the difference is less than a quarter, but the given dates are in different calendar quarters', function () {
      var result = (0, _index.default)(new Date(2014, 6
      /* Jul */
      , 1), new Date(2014, 5
      /* Jun */
      , 30));
      (0, _assert.default)(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 5
      /* Jun */
      , 30), new Date(2014, 6
      /* Jul */
      , 1));
      (0, _assert.default)(result === 0);
    });
    it('the days of months of the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 3
      /* Apr */
      , 6), new Date(2014, 0
      /* Jan */
      , 6));
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
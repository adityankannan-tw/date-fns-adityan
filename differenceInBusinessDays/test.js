"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInBusinessDays', function () {
  it('returns the number of business days between the given dates, excluding weekends', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 18), new Date(2014, 0
    /* Jan */
    , 10));
    (0, _assert.default)(result === 135);
  });
  it('can handle long ranges', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500
      /* 500 ms test timeout */
      );
    }

    var result = (0, _index.default)(new Date(15000, 0
    /* Jan */
    , 1), new Date(2014, 0
    /* Jan */
    , 1));
    (0, _assert.default)(result === 3387885);
  });
  it('the same except given first date falls on a weekend', function () {
    var result = (0, _index.default)(new Date(2019, 6
    /* Jul */
    , 20), new Date(2019, 6
    /* Jul */
    , 18));
    (0, _assert.default)(result === 2);
  });
  it('the same except given second date falls on a weekend', function () {
    var result = (0, _index.default)(new Date(2019, 6
    /* Jul */
    , 23), new Date(2019, 6
    /* Jul */
    , 20));
    (0, _assert.default)(result === 1);
  });
  it('the same except both given dates fall on a weekend', function () {
    var result = (0, _index.default)(new Date(2019, 6
    /* Jul */
    , 28), new Date(2019, 6
    /* Jul */
    , 20));
    (0, _assert.default)(result === 5);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2014, 0
    /* Jan */
    , 10), new Date(2014, 6
    /* Jul */
    , 20));
    (0, _assert.default)(result === -135);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 6, 18).getTime(), new Date(2014, 0, 10).getTime());
    (0, _assert.default)(result === 135);
  });
  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 4, 23, 59));
      (0, _assert.default)(result === 1);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 4, 23, 59), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      (0, _assert.default)(result === -1);
    });
    it('the time values of the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 4, 0, 0));
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
});
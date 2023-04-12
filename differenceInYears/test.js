"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInYears', function () {
  it('returns the number of full years between the given dates', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 1);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2011, 6
    /* Jul */
    , 2, 6, 0), new Date(2012, 6
    /* Jul */
    , 2, 18, 0));
    (0, _assert.default)(result === -1);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2).getTime(), new Date(2010, 6
    /* Jul */
    , 2).getTime());
    (0, _assert.default)(result === 4);
  });
  describe('leap days', function () {
    it('supports past dates with right side after leap day', function () {
      var result = (0, _index.default)(new Date(2004, 1
      /* Feb */
      , 29, 0, 0), new Date(2002, 2
      /* Mar */
      , 1, 0, 0));
      (0, _assert.default)(result === 1);
    });
    it('supports past dates with right side before leap day', function () {
      var result = (0, _index.default)(new Date(2004, 1
      /* Feb */
      , 29, 0, 0), new Date(2002, 1
      /* Feb */
      , 28, 0, 0));
      (0, _assert.default)(result === 2);
    });
    it('supports future dates', function () {
      var result = (0, _index.default)(new Date(2004, 1
      /* Feb */
      , 29, 0, 0), new Date(2006, 2
      /* Mar */
      , 1, 0, 0));
      (0, _assert.default)(result === -2);
    });
    it('supports equal dates of same year', function () {
      var result = (0, _index.default)(new Date(2004, 1
      /* Feb */
      , 29, 0, 0), new Date(2004, 1
      /* Feb */
      , 29, 0, 0));
      (0, _assert.default)(result === 0);
    });
    it('supports equal dates of different years', function () {
      var result = (0, _index.default)(new Date(2008, 1
      /* Feb */
      , 29, 0, 0), new Date(2004, 1
      /* Feb */
      , 29, 0, 0));
      (0, _assert.default)(result === 4);
    });
  });
  describe('edge cases', function () {
    it('the difference is less than a year, but the given dates are in different calendar years', function () {
      var result = (0, _index.default)(new Date(2015, 0
      /* Jan */
      , 1), new Date(2014, 11
      /* Dec */
      , 31));
      (0, _assert.default)(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 11
      /* Dec */
      , 31), new Date(2015, 0
      /* Jan */
      , 1));
      (0, _assert.default)(result === 0);
    });
    it('the days and months of the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5), new Date(2012, 8
      /* Sep */
      , 5));
      (0, _assert.default)(result === 2);
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
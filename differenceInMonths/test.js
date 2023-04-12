"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInMonths', function () {
  it('returns the number of full months between the given dates', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 12);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2011, 6
    /* Jul */
    , 2, 6, 0), new Date(2012, 6
    /* Jul */
    , 2, 18, 0));
    (0, _assert.default)(result === -12);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 7
    /* Aug */
    , 2).getTime(), new Date(2010, 6
    /* Jul */
    , 2).getTime());
    (0, _assert.default)(result === 49);
  });
  describe('edge cases', function () {
    it('it returns diff of 1 month between Feb 28 2021 and Jan 30 2021', function () {
      var result = (0, _index.default)(new Date(2021, 1
      /* Feb */
      , 28), new Date(2021, 0
      /* Jan */
      , 30));
      (0, _assert.default)(result === 1);
    });
    it('it returns diff of 1 month between Feb 28 2021 and Jan 31 2021', function () {
      var result = (0, _index.default)(new Date(2021, 1
      /* Feb */
      , 28), new Date(2021, 0
      /* Jan */
      , 31));
      (0, _assert.default)(result === 1);
    });
    it('it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021', function () {
      var result = (0, _index.default)(new Date(2021, 10
      /* Nov */
      , 30), new Date(2021, 9
      /* Oct */
      , 31));
      (0, _assert.default)(result === 1);
    });
    it('it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021', function () {
      var result = (0, _index.default)(new Date(2021, 9
      /* Oct */
      , 31), new Date(2021, 8
      /* Sep */
      , 30));
      (0, _assert.default)(result === 1);
    });
    it('it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021', function () {
      var result = (0, _index.default)(new Date(2021, 9
      /* Oct */
      , 31), new Date(2021, 3
      /* Apr */
      , 30));
      (0, _assert.default)(result === 6);
    });
    it('it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021', function () {
      var result = (0, _index.default)(new Date(2021, 8
      /* Sep */
      , 30), new Date(2021, 9
      /* Oct */
      , 31));
      (0, _assert.default)(result === -1);
    });
    it('the difference is less than a month, but the given dates are in different calendar months', function () {
      var result = (0, _index.default)(new Date(2014, 7
      /* Aug */
      , 1), new Date(2014, 6
      /* Jul */
      , 31));
      (0, _assert.default)(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 6
      /* Jul */
      , 31), new Date(2014, 7
      /* Aug */
      , 1));
      (0, _assert.default)(result === 0);
    });
    it('the days of months of the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 6), new Date(2014, 7
      /* Aug */
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
  describe('edge cases', function () {
    it('returns the number of full months between the given dates - end of Feb', function () {
      (0, _assert.default)((0, _index.default)(new Date(2012, 1
      /* Feb */
      , 29, 9, 0, 0), new Date(2012, 1
      /* Feb */
      , 29, 10, 0, 0)) === 0);
      (0, _assert.default)((0, _index.default)(new Date(2012, 1
      /* Feb */
      , 28, 9, 0, 0), new Date(2012, 1
      /* Feb */
      , 29, 10, 0, 0)) === 0);
      (0, _assert.default)((0, _index.default)(new Date(2012, 1
      /* Feb */
      , 27, 9, 0, 0), new Date(2012, 1
      /* Feb */
      , 27, 10, 0, 0)) === 0);
      (0, _assert.default)((0, _index.default)(new Date(2012, 1
      /* Feb */
      , 28, 9, 0, 0), new Date(2012, 1
      /* Feb */
      , 28, 10, 0, 0)) === 0);
    });
    (0, _assert.default)((0, _index.default)(new Date(2021, 1
    /* Feb */
    , 28, 7, 23, 7), new Date(2021, 1
    /* Feb */
    , 28, 7, 38, 18)) === 0);
  });
});
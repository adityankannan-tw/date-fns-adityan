"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 1, 0, 0, 0, 0));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 0
    /* Dec */
    , 1, 0, 0, 0, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0
    /* Jan */
    , 5);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(9, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
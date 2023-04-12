"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setMonth', function () {
  it('sets the month', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 1);

    _assert.default.deepStrictEqual(result, new Date(2014, 1
    /* Feb */
    , 1));
  });
  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    var result = (0, _index.default)(new Date(2014, 11
    /* Dec */
    , 31), 1);

    _assert.default.deepStrictEqual(result, new Date(2014, 1
    /* Feb */
    , 28));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 11);

    _assert.default.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 5);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 11
    /* Dec */
    , 31);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1
    /* Feb */
    , 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 1);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 1);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
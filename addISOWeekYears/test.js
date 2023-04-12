"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('addISOWeekYears', function () {
  it('adds the given number of ISO week-numbering years', function () {
    var result = (0, _index.default)(new Date(2010, 6
    /* Jul */
    , 2), 5);

    _assert.default.deepStrictEqual(result, new Date(2015, 5
    /* Jun */
    , 26));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 12);

    _assert.default.deepStrictEqual(result, new Date(2026, 7
    /* Aug */
    , 31));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 12);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(10, 6
    /* Jul */
    , 2);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(15, 5
    /* Jun */
    , 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 5);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 5);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2010, 6
    /* Jul */
    , 2), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
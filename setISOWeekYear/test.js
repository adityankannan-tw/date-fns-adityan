"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setISOWeekYear', function () {
  it('sets the ISO week-numbering year, saving the ISO week and the day of the week', function () {
    var result = (0, _index.default)(new Date(2008, 11
    /* Dec */
    , 29), 2007);

    _assert.default.deepStrictEqual(result, new Date(2007, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2010, 0
    /* Jan */
    , 2).getTime(), 2004);

    _assert.default.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2008, 11
    /* Dec */
    , 29);
    (0, _index.default)(date, 2000);

    _assert.default.deepStrictEqual(date, new Date(2008, 11
    /* Dec */
    , 29));
  });
  it('sets ISO week-numbering years less than 100', function () {
    var initialDate = new Date(2008, 11
    /* Dec */
    , 29);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 7);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(8, 11
    /* Dec */
    , 29);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0
    /* Jan */
    , 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 7);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 2007);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2008, 11
    /* Dec */
    , 29), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
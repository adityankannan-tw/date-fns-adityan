"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setISOWeek', function () {
  it('sets the ISO week', function () {
    var result = (0, _index.default)(new Date(2004, 7
    /* Aug */
    , 7), 53);

    _assert.default.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2009, 11
    /* Dec */
    , 2).getTime(), 1);

    _assert.default.deepStrictEqual(result, new Date(2008, 11
    /* Dec */
    , 31));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _index.default)(date, 52);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0
    /* Jan */
    , 4);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11
    /* Dec */
    , 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 52);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 53);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2004, 7
    /* Aug */
    , 7), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
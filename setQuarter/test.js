"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setQuarter', function () {
  it('sets the quarter of the year', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2), 1);

    _assert.default.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 2));
  });
  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    var result = (0, _index.default)(new Date(2014, 10
    /* Nov */
    , 30), 1);

    _assert.default.deepStrictEqual(result, new Date(2014, 1
    /* Feb */
    , 28));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 1).getTime(), 4);

    _assert.default.deepStrictEqual(result, new Date(2014, 9
    /* Oct */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 1);
    (0, _index.default)(date, 2);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 1));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 10
    /* Nov */
    , 30);
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
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
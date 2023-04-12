"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('endOfISOWeekYear', function () {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of an ISO year', function () {
    var result = (0, _index.default)(new Date(2009, 0
    /* Jan */
    , 1, 16, 0));

    _assert.default.deepStrictEqual(result, new Date(2010, 0
    /* Jan */
    , 3, 23, 59, 59, 999));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2005, 0
    /* Jan */
    , 1, 6, 0).getTime());

    _assert.default.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 2, 23, 59, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(5, 0
    /* Jan */
    , 4);
    initialDate.setHours(16, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(6, 0
    /* Jan */
    , 1);
    expectedResult.setHours(23, 59, 59, 999);
    var result = (0, _index.default)(initialDate);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
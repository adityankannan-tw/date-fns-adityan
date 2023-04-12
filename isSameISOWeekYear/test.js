"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isSameISOWeekYear', function () {
  it('returns true if the given dates have the same ISO week-numbering year', function () {
    var result = (0, _index.default)(new Date(2003, 11
    /* Dec */
    , 29), new Date(2005, 0
    /* Jan */
    , 2));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given dates have different ISO week-numbering years', function () {
    var result = (0, _index.default)(new Date(2014, 11
    /* Dec */
    , 28), new Date(2014, 11
    /* Dec */
    , 29));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2003, 11
    /* Dec */
    , 29).getTime(), new Date(2005, 0
    /* Jan */
    , 2).getTime());
    (0, _assert.default)(result === true);
  });
  it('handles dates before 100 AD', function () {
    var firstDate = new Date(0);
    firstDate.setFullYear(5, 0
    /* Jan */
    , 1);
    firstDate.setHours(0, 0, 0, 0);
    var secondDate = new Date(0);
    secondDate.setFullYear(5, 0
    /* Jan */
    , 2);
    secondDate.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(firstDate, secondDate);
    (0, _assert.default)(result === true);
  });
  it('returns false if the first date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(1989, 6
    /* Jul */
    , 10));
    (0, _assert.default)(result === false);
  });
  it('returns false if the second date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(1987, 1
    /* Feb */
    , 11), new Date(NaN));
    (0, _assert.default)(result === false);
  });
  it('returns false if the both dates are `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(NaN));
    (0, _assert.default)(result === false);
  });
});
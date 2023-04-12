"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getISOWeeksInYear', function () {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', function () {
    var result = (0, _index.default)(new Date(2015, 1
    /* Feb */
    , 11));
    (0, _assert.default)(result === 53);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2003, 11
    /* Dec */
    , 30).getTime();
    var result = (0, _index.default)(date);
    (0, _assert.default)(result === 53);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0
    /* Jan */
    , 4);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);
    (0, _assert.default)(result === 53);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
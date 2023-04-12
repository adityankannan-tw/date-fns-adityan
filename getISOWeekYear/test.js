"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getISOWeekYear', function () {
  it('returns the ISO week-numbering year of the given date', function () {
    var result = (0, _index.default)(new Date(2007, 11
    /* Dec */
    , 31));
    (0, _assert.default)(result === 2008);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2005, 0
    /* Jan */
    , 1).getTime());
    (0, _assert.default)(result === 2004);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(7, 11
    /* Dec */
    , 31);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);
    (0, _assert.default)(result === 8);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
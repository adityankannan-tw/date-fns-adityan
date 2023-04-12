"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getDaysInMonth', function () {
  it('returns the number of days in the month of the given date', function () {
    var result = (0, _index.default)(new Date(2100, 1
    /* Feb */
    , 11));
    (0, _assert.default)(result === 28);
  });
  it('works for the February of a leap year', function () {
    var result = (0, _index.default)(new Date(2000, 1
    /* Feb */
    , 11));
    (0, _assert.default)(result === 29);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    var result = (0, _index.default)(date);
    (0, _assert.default)(result === 31);
  });
  it('handles dates before 100 AD', function () {
    var date = new Date(0);
    date.setFullYear(0, 1
    /* Feb */
    , 15);
    date.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(date);
    (0, _assert.default)(result === 29);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
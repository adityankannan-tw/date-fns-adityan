"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getDaysInYear', function () {
  it('returns the number of days in the year of the given date', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2));
    (0, _assert.default)(result === 365);
  });
  it('works for a leap year', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2));
    (0, _assert.default)(result === 366);
  });
  it('works for the years divisible by 100 but not by 400', function () {
    var result = (0, _index.default)(new Date(2100, 6
    /* Jul */
    , 2));
    (0, _assert.default)(result === 365);
  });
  it('works for the years divisible by 400', function () {
    var result = (0, _index.default)(new Date(2000, 6
    /* Jul */
    , 2));
    (0, _assert.default)(result === 366);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2012, 6
    /* Jul */
    , 2).getTime();
    var result = (0, _index.default)(date);
    (0, _assert.default)(result === 366);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
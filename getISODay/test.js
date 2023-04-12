"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = (0, _index.default)(new Date(2012, 1
    /* Feb */
    , 29));
    (0, _assert.default)(result === 3);
  });
  it('returns 7 if the given day is Sunday', function () {
    var result = (0, _index.default)(new Date(2014, 5
    /* Jun */
    , 1));
    (0, _assert.default)(result === 7);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 5
    /* Jun */
    , 1).getTime());
    (0, _assert.default)(result === 7);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getMinutes', function () {
  it('returns the minutes of the given date', function () {
    var result = (0, _index.default)(new Date(2012, 1
    /* Feb */
    , 29, 11, 45, 5));
    (0, _assert.default)(result === 45);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 3
    /* Apr */
    , 2, 23, 30).getTime());
    (0, _assert.default)(result === 30);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
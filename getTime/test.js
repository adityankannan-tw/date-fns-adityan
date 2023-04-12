"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000;
    var result = (0, _index.default)(new Date(timestamp));
    (0, _assert.default)(result === timestamp);
  });
  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000;
    var result = (0, _index.default)(timestamp);
    (0, _assert.default)(result === timestamp);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
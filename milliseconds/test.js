"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('milliseconds', function () {
  it('converts years to milliseconds', function () {
    var result = (0, _index.default)({
      years: 2
    });
    (0, _assert.default)(result === 63113904000);
  });
  it('converts months to milliseconds', function () {
    var result = (0, _index.default)({
      months: 3
    });
    (0, _assert.default)(result === 7889238000);
  });
  it('converts weeks to milliseconds', function () {
    var result = (0, _index.default)({
      weeks: 2
    });
    (0, _assert.default)(result === 1209600000);
  });
  it('converts days to milliseconds', function () {
    var result = (0, _index.default)({
      days: 5
    });
    (0, _assert.default)(result === 432000000);
  });
  it('converts hours to milliseconds', function () {
    var result = (0, _index.default)({
      hours: 2
    });
    (0, _assert.default)(result === 7200000);
  });
  it('converts minutes to milliseconds', function () {
    var result = (0, _index.default)({
      minutes: 5
    });
    (0, _assert.default)(result === 300000);
  });
  it('converts seconds to milliseconds', function () {
    var result = (0, _index.default)({
      seconds: 10
    });
    (0, _assert.default)(result === 10000);
  });
  it('sums all the duration values', function () {
    var result = (0, _index.default)({
      years: 2,
      months: 3,
      weeks: 2,
      days: 5,
      hours: 2,
      minutes: 5,
      seconds: 10
    });
    (0, _assert.default)(result === 72652252000);
  });
  it('returns 0 for an empty duration', function () {
    var result = (0, _index.default)({});
    (0, _assert.default)(result === 0);
  });
});
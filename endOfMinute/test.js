"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('endOfMinute', function () {
  it('returns the date with the time set to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 11, 1, 22, 15).getTime());

    _assert.default.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 11, 1, 22, 15));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
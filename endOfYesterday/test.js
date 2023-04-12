"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('endOfYesterday', function () {
  it('returns yesterday with the time settled to 23:59:59.999', function () {
    var clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 14, 30, 45, 500).getTime());

    var result = (0, _index.default)();

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 24, 23, 59, 59, 999));

    clock.restore();
  });
  it('handles dates before 100 AD', function () {
    var now = new Date(0);
    now.setFullYear(14, 8
    /* Sep */
    , 25);
    now.setHours(14, 30, 45, 500);

    var clock = _sinon.default.useFakeTimers(now.getTime());

    var expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8
    /* Sep */
    , 24);
    expectedResult.setHours(23, 59, 59, 999);
    var result = (0, _index.default)();

    _assert.default.deepStrictEqual(result, expectedResult);

    clock.restore();
  });
});
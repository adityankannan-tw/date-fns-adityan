/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import endOfYesterday from "./index.js";
describe('endOfYesterday', function () {
  it('returns yesterday with the time settled to 23:59:59.999', function () {
    var clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 14, 30, 45, 500).getTime());
    var result = endOfYesterday();
    assert.deepStrictEqual(result, new Date(2014, 8
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
    var clock = sinon.useFakeTimers(now.getTime());
    var expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8
    /* Sep */
    , 24);
    expectedResult.setHours(23, 59, 59, 999);
    var result = endOfYesterday();
    assert.deepStrictEqual(result, expectedResult);
    clock.restore();
  });
});
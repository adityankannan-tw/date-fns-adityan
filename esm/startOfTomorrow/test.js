/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import startOfTomorrow from "./index.js";
describe('startOfTomorrow', function () {
  it('returns the start of tomorrow', function () {
    var clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 14, 30, 45, 500).getTime());
    var result = startOfTomorrow();
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 26));
    clock.restore();
  });
  it('handles dates before 100 AD', function () {
    var now = new Date(0);
    now.setFullYear(14, 8
    /* Sep */
    , 25);
    now.setHours(0, 0, 0, 0);
    var clock = sinon.useFakeTimers(now.getTime());
    var expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8
    /* Sep */
    , 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfTomorrow();
    assert.deepStrictEqual(result, expectedResult);
    clock.restore();
  });
});
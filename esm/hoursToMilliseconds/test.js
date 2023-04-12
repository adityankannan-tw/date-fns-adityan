/* eslint-env mocha */
import assert from 'assert';
import hoursToMilliseconds from "./index.js";
describe('hoursToMilliseconds', function () {
  it('converts hours to milliseconds', function () {
    assert(hoursToMilliseconds(1) === 3600000);
    assert(hoursToMilliseconds(2) === 7200000);
  });
  it('uses floor rounding', function () {
    assert(hoursToMilliseconds(0.123456) === 444441);
  });
  it('handles border values', function () {
    assert(hoursToMilliseconds(1.5) === 5400000);
    assert(hoursToMilliseconds(0) === 0);
  });
});
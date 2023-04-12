/* eslint-env mocha */
import assert from 'assert';
import hoursToSeconds from "./index.js";
describe('hoursToSeconds', function () {
  it('converts hours to seconds', function () {
    assert(hoursToSeconds(1) === 3600);
    assert(hoursToSeconds(2) === 7200);
  });
  it('uses floor rounding', function () {
    assert(hoursToSeconds(0.123) === 442);
  });
  it('handles border values', function () {
    assert(hoursToSeconds(1.5) === 5400);
    assert(hoursToSeconds(0) === 0);
  });
});
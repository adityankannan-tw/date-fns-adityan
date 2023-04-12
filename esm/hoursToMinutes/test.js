/* eslint-env mocha */
import assert from 'assert';
import hoursToMinutes from "./index.js";
describe('hoursToMinutes', function () {
  it('converts hours to minutes', function () {
    assert(hoursToMinutes(1) === 60);
    assert(hoursToMinutes(2) === 120);
  });
  it('uses floor rounding', function () {
    assert(hoursToMinutes(0.123) === 7);
  });
  it('handles border values', function () {
    assert(hoursToMinutes(1.5) === 90);
    assert(hoursToMinutes(0) === 0);
  });
});
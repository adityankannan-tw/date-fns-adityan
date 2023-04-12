/* eslint-env mocha */
import assert from 'assert';
import secondsToMinutes from "./index.js";
describe('secondsToMinutes', function () {
  it('converts seconds to minutes', function () {
    assert(secondsToMinutes(60) === 1);
    assert(secondsToMinutes(120) === 2);
  });
  it('uses floor rounding', function () {
    assert(secondsToMinutes(61) === 1);
    assert(secondsToMinutes(59) === 0);
  });
  it('handles border values', function () {
    assert(secondsToMinutes(60.5) === 1);
    assert(secondsToMinutes(0) === 0);
  });
});
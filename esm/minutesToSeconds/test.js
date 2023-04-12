/* eslint-env mocha */
import assert from 'assert';
import minutesToSeconds from "./index.js";
describe('minutesToSeconds', function () {
  it('converts minutes to seconds', function () {
    assert(minutesToSeconds(1) === 60);
    assert(minutesToSeconds(2) === 120);
  });
  it('uses floor rounding', function () {
    assert(minutesToSeconds(0.123456) === 7);
  });
  it('handles border values', function () {
    assert(minutesToSeconds(1.5) === 90);
    assert(minutesToSeconds(0) === 0);
  });
});
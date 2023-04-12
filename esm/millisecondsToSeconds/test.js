/* eslint-env mocha */
import assert from 'assert';
import millisecondsToSeconds from "./index.js";
describe('millisecondsToSeconds', function () {
  it('converts milliseconds to seconds', function () {
    assert(millisecondsToSeconds(1000) === 1);
    assert(millisecondsToSeconds(2000) === 2);
  });
  it('uses floor rounding', function () {
    assert(millisecondsToSeconds(1001) === 1);
    assert(millisecondsToSeconds(999) === 0);
  });
  it('handles border values', function () {
    assert(millisecondsToSeconds(1000.5) === 1);
    assert(millisecondsToSeconds(0) === 0);
  });
});
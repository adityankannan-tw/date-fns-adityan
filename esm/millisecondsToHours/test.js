/* eslint-env mocha */
import assert from 'assert';
import millisecondsToHours from "./index.js";
describe('millisecondsToHours', function () {
  it('converts milliseconds to hours', function () {
    assert(millisecondsToHours(3600000) === 1);
    assert(millisecondsToHours(7200000) === 2);
  });
  it('uses floor rounding', function () {
    assert(millisecondsToHours(3600001) === 1);
    assert(millisecondsToHours(3599999) === 0);
  });
  it('handles border values', function () {
    assert(millisecondsToHours(3600000.5) === 1);
    assert(millisecondsToHours(0) === 0);
  });
});
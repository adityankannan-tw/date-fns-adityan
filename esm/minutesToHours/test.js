/* eslint-env mocha */
import assert from 'assert';
import minuteToHours from "./index.js";
describe('minuteToHours', function () {
  it('converts minutes to hours', function () {
    assert(minuteToHours(60) === 1);
    assert(minuteToHours(120) === 2);
  });
  it('uses floor rounding', function () {
    assert(minuteToHours(61) === 1);
    assert(minuteToHours(59) === 0);
  });
  it('handles border values', function () {
    assert(minuteToHours(60.5) === 1);
    assert(minuteToHours(0) === 0);
  });
});
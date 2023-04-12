/* eslint-env mocha */
import assert from 'assert';
import daysToWeeks from "./index.js";
describe('daysToWeeks', function () {
  it('converts days to weeks', function () {
    assert(daysToWeeks(7) === 1);
    assert(daysToWeeks(14) === 2);
  });
  it('uses floor rounding', function () {
    assert(daysToWeeks(8) === 1);
    assert(daysToWeeks(6) === 0);
  });
  it('handles border values', function () {
    assert(daysToWeeks(7.5) === 1);
    assert(daysToWeeks(0) === 0);
  });
});
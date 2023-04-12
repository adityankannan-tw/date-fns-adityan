/* eslint-env mocha */
import assert from 'assert';
import monthsToQuarters from "./index.js";
describe('monthsToQuarters', function () {
  it('converts months to quarters', function () {
    assert(monthsToQuarters(3) === 1);
    assert(monthsToQuarters(6) === 2);
  });
  it('uses floor rounding', function () {
    assert(monthsToQuarters(4) === 1);
    assert(monthsToQuarters(2) === 0);
  });
  it('handles border values', function () {
    assert(monthsToQuarters(3.5) === 1);
    assert(monthsToQuarters(0) === 0);
  });
});
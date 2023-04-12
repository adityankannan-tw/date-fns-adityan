/* eslint-env mocha */
import assert from 'assert';
import yearsToQuarters from "./index.js";
describe('yearsToQuarters', function () {
  it('converts years to quarters', function () {
    assert(yearsToQuarters(1) === 4);
    assert(yearsToQuarters(2) === 8);
  });
  it('uses floor rounding', function () {
    assert(yearsToQuarters(1.3) === 5);
    assert(yearsToQuarters(0.2) === 0);
  });
  it('handles border values', function () {
    assert(yearsToQuarters(1.5) === 6);
    assert(yearsToQuarters(0) === 0);
  });
});
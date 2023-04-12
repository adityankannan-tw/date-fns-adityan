/* eslint-env mocha */
import assert from 'assert';
import yearsToMonths from "./index.js";
describe('yearsToMonths', function () {
  it('converts years to months', function () {
    assert(yearsToMonths(1) === 12);
    assert(yearsToMonths(2) === 24);
  });
  it('uses floor rounding', function () {
    assert(yearsToMonths(1.7) === 20);
    assert(yearsToMonths(0.1) === 1);
  });
  it('handles border values', function () {
    assert(yearsToMonths(1.5) === 18);
    assert(yearsToMonths(0) === 0);
  });
});
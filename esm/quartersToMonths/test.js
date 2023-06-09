/* eslint-env mocha */
import assert from 'assert';
import quartersToMonths from "./index.js";
describe('quartersToMonths', function () {
  it('converts quarters to months', function () {
    assert(quartersToMonths(1) === 3);
    assert(quartersToMonths(2) === 6);
  });
  it('uses floor rounding', function () {
    assert(quartersToMonths(1.5) === 4);
    assert(quartersToMonths(0.3) === 0);
  });
  it('handles border values', function () {
    assert(quartersToMonths(0.4) === 1);
    assert(quartersToMonths(0) === 0);
  });
});
/* eslint-env mocha */
import assert from 'assert';
import milliseconds from "./index.js";
describe('milliseconds', function () {
  it('converts years to milliseconds', function () {
    var result = milliseconds({
      years: 2
    });
    assert(result === 63113904000);
  });
  it('converts months to milliseconds', function () {
    var result = milliseconds({
      months: 3
    });
    assert(result === 7889238000);
  });
  it('converts weeks to milliseconds', function () {
    var result = milliseconds({
      weeks: 2
    });
    assert(result === 1209600000);
  });
  it('converts days to milliseconds', function () {
    var result = milliseconds({
      days: 5
    });
    assert(result === 432000000);
  });
  it('converts hours to milliseconds', function () {
    var result = milliseconds({
      hours: 2
    });
    assert(result === 7200000);
  });
  it('converts minutes to milliseconds', function () {
    var result = milliseconds({
      minutes: 5
    });
    assert(result === 300000);
  });
  it('converts seconds to milliseconds', function () {
    var result = milliseconds({
      seconds: 10
    });
    assert(result === 10000);
  });
  it('sums all the duration values', function () {
    var result = milliseconds({
      years: 2,
      months: 3,
      weeks: 2,
      days: 5,
      hours: 2,
      minutes: 5,
      seconds: 10
    });
    assert(result === 72652252000);
  });
  it('returns 0 for an empty duration', function () {
    var result = milliseconds({});
    assert(result === 0);
  });
});
/* eslint-env mocha */
import assert from 'assert';
import eachWeekendOfMonth from "./index.js";
describe('eachWeekendOfMonth', function () {
  it('returns all weekends of the given month', function () {
    var result = eachWeekendOfMonth(new Date(2022, 1, 20));
    assert.deepStrictEqual(result, [new Date(2022, 1, 5), new Date(2022, 1, 6), new Date(2022, 1, 12), new Date(2022, 1, 13), new Date(2022, 1, 19), new Date(2022, 1, 20), new Date(2022, 1, 26), new Date(2022, 1, 27)]);
  });
  it('throws RangeError when the expected year is an Invalid Date', function () {
    assert.throws(eachWeekendOfMonth.bind(null, new Date(NaN)), RangeError);
  });
});
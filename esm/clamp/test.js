/* eslint-env mocha */
import assert from 'assert';
import clamp from "./index.js";
describe('clamp', function () {
  it('accepts timestamps', function () {
    var start = new Date(2000, 1, 1).getTime();
    var date = new Date(2000, 1, 2).getTime();
    var end = new Date(2000, 1, 3).getTime();
    var result = clamp(date, {
      start: start,
      end: end
    });
    assert.deepStrictEqual(result, new Date(2000, 1, 2));
  });
  it('returns the start date when the date is less than start', function () {
    var start = new Date(2001, 1, 1);
    var date = new Date(2000, 1, 1);
    var end = new Date(2020, 1, 1);
    var result = clamp(date, {
      start: start,
      end: end
    });
    assert.deepStrictEqual(result, new Date(2001, 1, 1));
  });
  it('returns the end date when the date is greater than the end date', function () {
    var start = new Date(2000, 1, 1);
    var date = new Date(2003, 1, 1);
    var end = new Date(2001, 1, 1);
    var result = clamp(date, {
      start: start,
      end: end
    });
    assert.deepStrictEqual(result, new Date(2001, 1, 1));
  });
  it('returns the date when the date is within the bound of start and end', function () {
    var start = new Date(2000, 1, 1);
    var date = new Date(2001, 1, 1);
    var end = new Date(2003, 1, 1);
    var result = clamp(date, {
      start: start,
      end: end
    });
    assert.deepStrictEqual(result, new Date(2001, 1, 1));
  });
});
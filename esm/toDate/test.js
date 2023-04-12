/* eslint-env mocha */
import assert from 'assert';
import toDate from "./index.js";
describe('toDate', function () {
  describe('date argument', function () {
    it('returns a clone of the given date', function () {
      var date = new Date(2016, 0, 1);
      var dateClone = toDate(date);
      dateClone.setFullYear(2015);
      assert.deepStrictEqual(date, new Date(2016, 0, 1));
    });
  });
  describe('timestamp argument', function () {
    it('creates a date from the timestamp', function () {
      var timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime();
      var result = toDate(timestamp);
      assert.deepStrictEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123));
    });
  });
  describe('invalid argument', function () {
    it('returns Invalid Date if argument is NaN', function () {
      var result = toDate(NaN);
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });
    it('returns Invalid Date if argument is Invalid Date', function () {
      var result = toDate(new Date(NaN));
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });
  });
});
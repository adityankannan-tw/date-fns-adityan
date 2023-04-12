/* eslint-env mocha */
import assert from 'assert';
import addMonths from "./index.js";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
describe('addMonths', function () {
  it('adds the given number of months', function () {
    var result = addMonths(new Date(2014, 8
    /* Sep */
    , 1), 5);
    assert.deepStrictEqual(result, new Date(2015, 1
    /* Feb */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = addMonths(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 12);
    assert.deepStrictEqual(result, new Date(2015, 8
    /* Sep */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    addMonths(date, 12);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 31);
    var result = addMonths(date, 2);
    assert.deepStrictEqual(result, new Date(2015, 1
    /* Feb */
    , 28));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 0
    /* Jan */
    , 31);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1
    /* Feb */
    , 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = addMonths(initialDate, 1);
    assert.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addMonths(new Date(NaN), 5);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addMonths(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  var dstTransitions = getDstTransitions(2017);
  var dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  var HOUR = 1000 * 60 * 60;

  var override = function override(base) {
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : base.getFullYear();
    var month = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : base.getMonth();
    var day = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : base.getDate();
    var hour = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : base.getHours();
    var minute = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : base.getMinutes();
    return new Date(year, month, day, hour, minute);
  };

  dstOnly("works at DST-start boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.start;
    var result = addMonths(date, 2);
    assert.deepStrictEqual(result, override(date, date.getFullYear(), date.getMonth() + 2));
  });
  dstOnly("works at DST-start - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR);
    var result = addMonths(date, 2);
    var expected = override(date, date.getFullYear(), date.getMonth() + 2);
    assert.deepStrictEqual(result, expected);
  });
  dstOnly("works at DST-start - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 1 * HOUR);
    var result = addMonths(date, 2);
    var expected = override(date, date.getFullYear(), date.getMonth() + 2);
    assert.deepStrictEqual(result, expected);
  });
  dstOnly("works at DST-end boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.end;
    var result = addMonths(date, 2);
    assert.deepStrictEqual(result, override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12 // protect against wrap for Nov.
    ));
  });
  dstOnly("works at DST-end - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR);
    var result = addMonths(date, 2);
    assert.deepStrictEqual(result, override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12 // protect against wrap for Nov.
    ));
  });
  dstOnly("works at DST-end - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 1 * HOUR);
    var result = addMonths(date, 2);
    assert.deepStrictEqual(result, override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12 // protect against wrap for Nov.
    ));
  });
  dstOnly("doesn't mutate if zero increment is used: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end);
    var result = addMonths(date, 0);
    assert.deepStrictEqual(result, date);
  });
});
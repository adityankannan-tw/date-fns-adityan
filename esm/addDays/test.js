/* eslint-env mocha */
import assert from 'assert';
import addDays from "./index.js";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = addDays(new Date(2014, 8
    /* Sep */
    , 1), 10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 11));
  });
  it('accepts a timestamp', function () {
    var result = addDays(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);
    assert.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 11));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    addDays(date, 11);
    assert.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addDays(new Date(NaN), 10);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addDays(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
  var dstTransitions = getDstTransitions(2017);
  var dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  var HOUR = 1000 * 60 * 60;
  var MINUTE = 1000 * 60; // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes

  var dstOffset = dstTransitions.start && dstTransitions.end ? (dstTransitions.end.getTimezoneOffset() - dstTransitions.start.getTimezoneOffset()) * MINUTE : NaN;
  dstOnly("works at DST-start boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.start;
    var result = addDays(date, 1);
    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR));
  });
  dstOnly("works at DST-start - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR);
    var result = addDays(date, 1); // started before the transition so will only be 23 hours later in local time

    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR - dstOffset));
  });
  dstOnly("works at DST-start - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 1 * HOUR);
    var result = addDays(date, 1); // started before the transition so will only be 23 hours later in local time

    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR - dstOffset));
  });
  dstOnly("works at DST-end boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.end;
    var result = addDays(date, 1);
    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR));
  });
  dstOnly("works at DST-end - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR);
    var result = addDays(date, 1); // started before the transition so will be 25 hours later in local
    // time because one hour repeats after DST ends.

    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR + dstOffset));
  });
  dstOnly("works at DST-end - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 1 * HOUR);
    var result = addDays(date, 1); // started before the transition so will be 25 hours later in local
    // time because one hour repeats after DST ends.

    assert.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR + dstOffset));
  });
  dstOnly("doesn't mutate if zero increment is used: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end);
    var result = addDays(date, 0);
    assert.deepStrictEqual(result, date);
  });
});
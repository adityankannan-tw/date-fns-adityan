"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _tzOffsetTransitions = require("../../test/dst/tzOffsetTransitions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 11));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 11));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 11);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 10);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  var dstTransitions = (0, _tzOffsetTransitions.getDstTransitions)(2017);
  var dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  var HOUR = 1000 * 60 * 60;
  var MINUTE = 1000 * 60; // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes

  var dstOffset = dstTransitions.start && dstTransitions.end ? (dstTransitions.end.getTimezoneOffset() - dstTransitions.start.getTimezoneOffset()) * MINUTE : NaN;
  dstOnly("works at DST-start boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.start;
    var result = (0, _index.default)(date, 1);

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR));
  });
  dstOnly("works at DST-start - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR);
    var result = (0, _index.default)(date, 1); // started before the transition so will only be 23 hours later in local time

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR - dstOffset));
  });
  dstOnly("works at DST-start - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.start.getTime() - 1 * HOUR);
    var result = (0, _index.default)(date, 1); // started before the transition so will only be 23 hours later in local time

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR - dstOffset));
  });
  dstOnly("works at DST-end boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.end;
    var result = (0, _index.default)(date, 1);

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR));
  });
  dstOnly("works at DST-end - 30 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR);
    var result = (0, _index.default)(date, 1); // started before the transition so will be 25 hours later in local
    // time because one hour repeats after DST ends.

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR + dstOffset));
  });
  dstOnly("works at DST-end - 60 mins in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end.getTime() - 1 * HOUR);
    var result = (0, _index.default)(date, 1); // started before the transition so will be 25 hours later in local
    // time because one hour repeats after DST ends.

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + 24 * HOUR + dstOffset));
  });
  dstOnly("doesn't mutate if zero increment is used: ".concat(tz || '(unknown)'), function () {
    var date = new Date(dstTransitions.end);
    var result = (0, _index.default)(date, 0);

    _assert.default.deepStrictEqual(result, date);
  });
});
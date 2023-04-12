"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _tzOffsetTransitions = require("../../test/dst/tzOffsetTransitions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('add', function () {
  it('adds the values from the given object', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 10, 19, 50), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30
    });

    _assert.default.deepStrictEqual(result, new Date(2017, 5
    /* June */
    , 15, 15, 29, 20));
  });
  it('supports an undefined value in the duration object', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 10, 19, 50), {
      years: undefined,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30
    });

    _assert.default.deepStrictEqual(result, new Date(2015, 5
    /* June */
    , 15, 15, 29, 20));
  });
  it('returns same date object when passed empty duration values', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 10).getTime(), {
      years: undefined,
      months: undefined,
      weeks: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 10));
  });
  it('returns same date object when passed undefined duration values', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 10).getTime(), {});

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 10));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 10).getTime(), {
      hours: 4
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 14));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1, 10);
    (0, _index.default)(date, {
      hours: 4
    });

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1, 10));
  });
  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 31);
    var result = (0, _index.default)(date, {
      months: 9
    });

    _assert.default.deepStrictEqual(result, new Date(2015, 8
    /* Sep */
    , 30));
  });
  var dstTransitions = (0, _tzOffsetTransitions.getDstTransitions)(2017);
  var dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  var HOUR = 1000 * 60 * 60;
  dstOnly("works at DST-end boundary in local timezone: ".concat(tz || '(unknown)'), function () {
    var date = dstTransitions.end;
    var result = (0, _index.default)(date, {
      hours: 1
    });

    _assert.default.deepStrictEqual(result, new Date(date.getTime() + HOUR));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(-1, 10
    /* Nov */
    , 30);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1
    /* Feb */
    , 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, {
      months: 3
    });

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), {
      hours: 5
    });
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
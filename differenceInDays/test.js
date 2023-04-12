"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _tzOffsetTransitions = require("../../test/dst/tzOffsetTransitions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('differenceInDays', function () {
  it('returns the number of full days between the given dates', function () {
    var result = (0, _index.default)(new Date(2012, 6
    /* Jul */
    , 2, 18, 0), new Date(2011, 6
    /* Jul */
    , 2, 6, 0));
    (0, _assert.default)(result === 366);
  });
  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _index.default)(new Date(2011, 6
    /* Jul */
    , 2, 6, 0), new Date(2012, 6
    /* Jul */
    , 2, 18, 0));
    (0, _assert.default)(result === -366);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 5, 18, 0).getTime(), new Date(2014, 8
    /* Sep */
    , 4, 6, 0).getTime());
    (0, _assert.default)(result === 1);
  });
  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 4, 23, 59));
      (0, _assert.default)(result === 0);
    });
    it('the same for the swapped dates', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 4, 23, 59), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      (0, _assert.default)(result === 0);
    });
    it('the time values of the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 6, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      (0, _assert.default)(result === 1);
    });
    it('the given dates are the same', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      (0, _assert.default)(result === 0);
    });
    var dstTransitions = (0, _tzOffsetTransitions.getDstTransitions)(2017);
    var dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
    dstOnly("works across DST start & end in local timezone: ".concat(tz || '(unknown)'), function () {
      var start = dstTransitions.start,
          end = dstTransitions.end;
      var HOUR = 1000 * 60 * 60;
      var MINUTE = 1000 * 60;

      function sameTime(t1, t2) {
        return t1.getHours() === t2.getHours() && t1.getMinutes() === t2.getMinutes() && t1.getSeconds() === t2.getSeconds() && t1.getMilliseconds() === t2.getMilliseconds();
      }

      (0, _assert.default)(start !== undefined);
      (0, _assert.default)(end !== undefined);

      if (start === undefined || end === undefined) {
        return;
      } // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes


      var dstOffset = (end.getTimezoneOffset() - start.getTimezoneOffset()) * MINUTE; // TEST DST START (SPRING)
      // anchor to one hour before the boundary

      {
        var a = new Date(start.getTime() - HOUR); // 1 hour before DST

        var b = new Date(a.getTime() + 24 * HOUR - dstOffset); // 1 day later, same local time

        var c = new Date(a.getTime() + 48 * HOUR - dstOffset); // 2 days later, same local time

        (0, _assert.default)(sameTime(a, b));
        (0, _assert.default)(sameTime(a, c));
        (0, _assert.default)(sameTime(b, c));
        (0, _assert.default)((0, _index.default)(c, b) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(b, a) === 1); // 23 hours -> 1 day

        (0, _assert.default)((0, _index.default)(c, a) === 2); // 47 hours -> 2 days
      } // anchor exactly, the boundary

      {
        var _a = start; // exactly when DST starts

        var _b = new Date(_a.getTime() + 24 * HOUR); // 1 day later, same local time


        var _c = new Date(_a.getTime() + 48 * HOUR); // 2 days later, same local time


        (0, _assert.default)(sameTime(_a, _b));
        (0, _assert.default)(sameTime(_a, _c));
        (0, _assert.default)(sameTime(_b, _c));
        (0, _assert.default)((0, _index.default)(_c, _b) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_b, _a) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_c, _a) === 2); // 2 normal 24-hour days
      } // TEST DST END (FALL)
      // make sure that diffs across a "fall back" DST boundary won't report a full day
      // until 25 hours have elapsed.

      {
        var _a2 = new Date(end.getTime() - HOUR / 2); // 1 hour before Standard Time starts


        var _b2 = new Date(_a2.getTime() + 24 * HOUR + dstOffset - 15 * MINUTE); // 1 day later, 15 mins earlier local time


        var _c2 = new Date(_a2.getTime() + 48 * HOUR + dstOffset - 15 * MINUTE); // 2 days later, 15 mins earlier local time


        (0, _assert.default)((0, _index.default)(_c2, _b2) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_b2, _a2) === 0); // 24.75 hours -> 0 full days (because hour lost to DST)

        (0, _assert.default)((0, _index.default)(_c2, _a2) === 1); // 48.75 hours -> 1 full day (because hour lost to DST)
      } // anchor to one hour before the boundary

      {
        var _a3 = new Date(end.getTime() - HOUR); // 1 hour before Standard Time start


        var _b3 = new Date(_a3.getTime() + 24 * HOUR + dstOffset); // 1 day later, same local time


        var _c3 = new Date(_a3.getTime() + 48 * HOUR + dstOffset); // 2 days later, same local time


        (0, _assert.default)(sameTime(_a3, _b3));
        (0, _assert.default)(sameTime(_a3, _c3));
        (0, _assert.default)(sameTime(_b3, _c3));
        (0, _assert.default)((0, _index.default)(_c3, _b3) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_b3, _a3) === 1); // 25 hours -> 1 day

        (0, _assert.default)((0, _index.default)(_c3, _a3) === 2); // 49 hours -> 2 days
      } // anchor to one hour after the boundary

      {
        var _a4 = new Date(end.getTime() + HOUR); // 1 hour after Standard Time start


        var _b4 = new Date(_a4.getTime() + 24 * HOUR); // 1 day later, same local time


        var _c4 = new Date(_a4.getTime() + 48 * HOUR); // 2 days later, same local time


        (0, _assert.default)(sameTime(_a4, _b4));
        (0, _assert.default)(sameTime(_a4, _c4));
        (0, _assert.default)(sameTime(_b4, _c4));
        (0, _assert.default)((0, _index.default)(_c4, _b4) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_b4, _a4) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_c4, _a4) === 2); // 2 normal 24-hour days
      } // anchor exactly at the boundary

      {
        var _a5 = end; // exactly when Standard Time starts

        var _b5 = new Date(_a5.getTime() + 24 * HOUR); // 1 day later, same local time


        var _c5 = new Date(_a5.getTime() + 48 * HOUR); // 2 days later, same local time


        (0, _assert.default)((0, _index.default)(_b5, _a5) === 1); // normal 24-hour day

        (0, _assert.default)((0, _index.default)(_c5, _a5) === 2); // 2 normal 24-hour days
      }
    });
    it('does not return -0 when the given dates are the same', function () {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0;
      }

      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 5, 0, 0), new Date(2014, 8
      /* Sep */
      , 5, 0, 0));
      var resultIsNegative = isNegativeZero(result);
      (0, _assert.default)(resultIsNegative === false);
    });
  });
  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(2017, 0
    /* Jan */
    , 1));
    (0, _assert.default)(isNaN(result));
  });
  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(2017, 0
    /* Jan */
    , 1), new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
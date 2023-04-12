"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = _interopRequireDefault(require("../addMonths/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('intervalToDuration', function () {
  it('returns correct duration for arbitrary dates', function () {
    var start = new Date(1929, 0, 15, 12, 0, 0);
    var end = new Date(1968, 3, 4, 19, 5, 0);
    var result = (0, _index.default)({
      start: start,
      end: end
    });

    _assert.default.deepStrictEqual(result, {
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
      seconds: 0
    });
  });
  it('returns correct duration (1 of everything)', function () {
    var start = new Date(2020, 2, 1, 12, 0, 0);
    var end = new Date(2021, 3, 2, 13, 1, 1);
    var result = (0, _index.default)({
      start: start,
      end: end
    });

    _assert.default.deepStrictEqual(result, {
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    });
  });
  it('returns duration of 0 when the dates are the same', function () {
    var start = new Date(2020, 2, 1, 12, 0, 0);
    var end = new Date(2020, 2, 1, 12, 0, 0);
    var result = (0, _index.default)({
      start: start,
      end: end
    });

    _assert.default.deepStrictEqual(result, {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  });
  it("throws a RangeError if interval's start date is greater than its end date", function () {
    var interval = {
      start: new Date(2020, 3, 1),
      end: new Date(2020, 2, 1)
    };

    _assert.default.throws(_index.default.bind(null, interval), RangeError);
  });
  it("throws a RangeError if interval's start date invalid", function () {
    var interval = {
      start: new Date(NaN),
      end: new Date(2020, 0, 1)
    };

    _assert.default.throws(_index.default.bind(null, interval), RangeError);
  });
  it("throws a RangeError if interval's end date invalid", function () {
    var interval = {
      start: new Date(2020, 0, 1),
      end: new Date(NaN)
    };

    _assert.default.throws(_index.default.bind(null, interval), RangeError);
  });
  describe('edge cases', function () {
    it('returns correct duration for dates in the end of Feb - issue 2255', function () {
      _assert.default.deepStrictEqual((0, _index.default)({
        start: new Date(2012, 1
        /* Feb */
        , 28, 9, 0, 0),
        end: new Date(2012, 1
        /* Feb */
        , 29, 10, 0, 0)
      }), {
        years: 0,
        months: 0,
        days: 1,
        hours: 1,
        minutes: 0,
        seconds: 0
      });

      _assert.default.deepStrictEqual((0, _index.default)({
        start: new Date(2012, 1
        /* Feb */
        , 29, 9, 0, 0),
        end: new Date(2012, 1
        /* Feb */
        , 29, 10, 0, 0)
      }), {
        years: 0,
        months: 0,
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0
      });

      _assert.default.deepStrictEqual((0, _index.default)({
        start: new Date(2012, 1
        /* Feb */
        , 28, 9, 0, 0),
        end: new Date(2012, 1
        /* Feb */
        , 28, 10, 0, 0)
      }), {
        years: 0,
        months: 0,
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0
      }); // Issue 2261


      _assert.default.deepStrictEqual((0, _index.default)({
        start: new Date(2021, 1
        /* Feb */
        , 28, 7, 23, 7),
        end: new Date(2021, 1
        /* Feb */
        , 28, 7, 38, 18)
      }), {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 15,
        seconds: 11
      });
    });
    it('returns correct duration for end of month start dates - issue 2611', function () {
      var start = new Date(2021, 7, 31);
      var end = (0, _index2.default)(start, 1);

      _assert.default.deepStrictEqual(end, new Date(2021, 8, 30));

      var duration = (0, _index.default)({
        start: start,
        end: end
      });
      var expectedDuration = {
        years: 0,
        months: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      _assert.default.deepStrictEqual(duration, expectedDuration);
    });
    it('returns correct duration for Feb 29 on leap year + 1 month - issue 1778', function () {
      var duration = (0, _index.default)({
        start: new Date(2020, 1, 29),
        end: new Date(2020, 2, 29)
      });
      var expectedDuration = {
        years: 0,
        months: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      _assert.default.deepStrictEqual(duration, expectedDuration);
    });
    it('returns correct duration for Feb 28 to Apr 30 interval - issue 2910', function () {
      var duration = (0, _index.default)({
        start: new Date(2022, 1, 28),
        end: new Date(2022, 3, 30)
      });
      var expectedDuration = {
        years: 0,
        months: 2,
        days: 2,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      _assert.default.deepStrictEqual(duration, expectedDuration);
    });
    describe('issue 2470', function () {
      it('returns correct duration for Feb 28 to Aug 31 interval', function () {
        var duration = (0, _index.default)({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 31)
        });
        var expectedDuration = {
          years: 0,
          months: 6,
          days: 3,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
      it('returns correct duration for Feb 28 to Aug 30 interval', function () {
        var duration = (0, _index.default)({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 30)
        });
        var expectedDuration = {
          years: 0,
          months: 6,
          days: 2,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
      it('returns correct duration for Feb 28 to Aug 29 interval', function () {
        var duration = (0, _index.default)({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 29)
        });
        var expectedDuration = {
          years: 0,
          months: 6,
          days: 1,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
      it('returns correct duration for Feb 28 to Aug 28 interval', function () {
        var duration = (0, _index.default)({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 28)
        });
        var expectedDuration = {
          years: 0,
          months: 6,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
      it('returns correct duration for Feb 28 to Aug 27 interval', function () {
        // Feb 28 to July 28 is 5 months, July 28 to Aug 27 is 30 days
        var duration = (0, _index.default)({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 27)
        });
        var expectedDuration = {
          years: 0,
          months: 5,
          days: 30,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
      it('returns correct duration for Apr 30 to May 31 interval', function () {
        var duration = (0, _index.default)({
          start: new Date(2021, 3, 30),
          end: new Date(2021, 4, 31)
        });
        var expectedDuration = {
          years: 0,
          months: 1,
          days: 1,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        _assert.default.deepStrictEqual(duration, expectedDuration);
      });
    });
  });
});
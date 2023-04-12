"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('lastDayOfWeek', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 6));
  });
  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date, {
      weekStartsOn: 1
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 7));
  });
  it('allows to specify which day is the first day of the week in locale', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date, {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1
        }
      }
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 7));
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date, {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 0
        }
      }
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 7));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 6));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));
  });
  describe('edge cases', function () {
    describe('when the given day is before the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9
        /* Oct */
        , 6);
        var result = (0, _index.default)(date, {
          weekStartsOn: 3
        });

        _assert.default.deepStrictEqual(result, new Date(2014, 9
        /* Oct */
        , 7));
      });
    });
    describe('when the given day is the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9
        /* Oct */
        , 8);
        var result = (0, _index.default)(date, {
          weekStartsOn: 3
        });

        _assert.default.deepStrictEqual(result, new Date(2014, 9
        /* Oct */
        , 14));
      });
    });
    describe('when the given day is after the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9
        /* Oct */
        , 10);
        var result = (0, _index.default)(date, {
          weekStartsOn: 3
        });

        _assert.default.deepStrictEqual(result, new Date(2014, 9
        /* Oct */
        , 14));
      });
    });
    it('handles the week at the end of a year', function () {
      var date = new Date(2014, 11
      /* Dec */
      , 29);
      var result = (0, _index.default)(date, {
        weekStartsOn: 5
      });

      _assert.default.deepStrictEqual(result, new Date(2015, 0
      /* Jan */
      , 1));
    });
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setDay', function () {
  it('sets the day of the week', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 0);

    _assert.default.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 31));
  });
  it('allows to specify which day is the first day of the week', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 0, {
      weekStartsOn: 1
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 7));
  });
  it('allows to specify which day is the first day of the week in locale', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 0, {
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
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 0, {
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
  it('specifies Monday as the first day of the week', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 6), 1, {
      weekStartsOn: 1
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('specifies Tuesday as the first day of the week', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 6), 1, {
      weekStartsOn: 2
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 8));
  });
  describe('the day index is more than 6', function () {
    it('sets the day of the next week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 8);

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 8));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 7, {
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 8));
    });
    it('sets the day of another week in the future', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 14, {
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 15));
    });
  });
  describe('the day index is less than 0', function () {
    it('sets the day of the last week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), -6);

      _assert.default.deepStrictEqual(result, new Date(2014, 7
      /* Aug */
      , 25));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), -7, {
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 7
      /* Aug */
      , 25));
    });
    it('set the day of another week in the past', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), -14, {
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 7
      /* Aug */
      , 18));
    });
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 3);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 3));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 3);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 0);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
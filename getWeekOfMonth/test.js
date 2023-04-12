"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getWeekOfMonth', function () {
  it('returns the week of the month of the given date', function () {
    var result = (0, _index.default)(new Date(2017, 10
    /* Nov */
    , 15));
    (0, _assert.default)(result === 3);
  });
  describe('edge cases', function () {
    describe('when the given day is the first of a month', function () {
      it('returns the week of the month of the given date', function () {
        var result = (0, _index.default)(new Date(2017, 10
        /* Nov */
        , 1));
        (0, _assert.default)(result === 1);
      });
    });
    describe('when the given day is the last of a month #1', function () {
      it('returns the week of the month of the given date', function () {
        var result = (0, _index.default)(new Date(2017, 10
        /* Nov */
        , 30));
        (0, _assert.default)(result === 5);
      });
    });
    describe('when the given day is the last of a month #2', function () {
      it('returns the week of the month of the given date', function () {
        var result = (0, _index.default)(new Date(2017, 9
        /* Oct */
        , 31));
        (0, _assert.default)(result === 5);
      });
    });
  });
  it('allows to specify which day is the first day of the week', function () {
    var result = (0, _index.default)(new Date(2017, 9
    /* Oct */
    , 1), {
      weekStartsOn: 1
    });
    (0, _assert.default)(result === 1);
  });
  it('allows to specify which day is the first day of the week in locale', function () {
    var result = (0, _index.default)(new Date(2017, 9
    /* Oct */
    , 31), {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1
        }
      }
    });
    (0, _assert.default)(result === 6);
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var result = (0, _index.default)(new Date(2017, 10
    /* Nov */
    , 13), {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 0
        }
      }
    });
    (0, _assert.default)(result === 3);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2017, 10
    /* Nov */
    , 1).getTime());
    (0, _assert.default)(result === 1);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
  it('returns the week of the month of the given date, when the given date is sunday', function () {
    var result = (0, _index.default)(new Date(2019, 4
    /* May */
    , 5), {
      weekStartsOn: 1
    });
    (0, _assert.default)(result === 1);
  });
});
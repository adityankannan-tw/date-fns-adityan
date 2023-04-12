"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getWeeksInMonth', function () {
  it('returns the number of calendar weeks the month in the given date spans', function () {
    var result = (0, _index.default)(new Date(2015, 1
    /* Feb */
    , 8, 18, 0));
    (0, _assert.default)(result === 4);
  });
  it('allows to specify which day is the first day of the week', function () {
    var result = (0, _index.default)(new Date(2015, 1
    /* Feb */
    , 8, 18, 0), {
      weekStartsOn: 1
    });
    (0, _assert.default)(result === 5);
  });
  it('allows to specify which day is the first day of the week in locale', function () {
    var result = (0, _index.default)(new Date(2015, 1
    /* Feb */
    , 8, 18, 0), {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1
        }
      }
    });
    (0, _assert.default)(result === 5);
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var result = (0, _index.default)(new Date(2015, 1
    /* Feb */
    , 8, 18, 0), {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 0
        }
      }
    });
    (0, _assert.default)(result === 5);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(2017, 3
    /* Apr */
    , 8, 18, 0).getTime());
    (0, _assert.default)(result === 6);
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
  it('returns NaN if the date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
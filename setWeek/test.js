"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setWeek', function () {
  it('sets the local week', function () {
    var result = (0, _index.default)(new Date(2005, 0
    /* Jan */
    , 2), 1);

    _assert.default.deepStrictEqual(result, new Date(2004, 11
    /* Dec */
    , 26));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2009, 11
    /* Dec */
    , 2).getTime(), 1);

    _assert.default.deepStrictEqual(result, new Date(2008, 11
    /* Dec */
    , 31));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _index.default)(date, 52);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0
    /* Jan */
    , 4);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11
    /* Dec */
    , 19);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate, 52);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 53);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2004, 7
    /* Aug */
    , 7), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2005, 0
    /* Jan */
    , 2);
    var result = (0, _index.default)(date, 1, {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    });

    _assert.default.deepStrictEqual(result, new Date(2004, 0
    /* Jan */
    , 4));
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2005, 0
    /* Jan */
    , 2);
    var result = (0, _index.default)(date, 1, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      }
    });

    _assert.default.deepStrictEqual(result, new Date(2004, 0
    /* Jan */
    , 4));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfWeekYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week year', function () {
    var result = (0, _index.default)(new Date(2005, 6
    /* Jul */
    , 2));

    _assert.default.deepStrictEqual(result, new Date(2004, 11
    /* Dec */
    , 26, 0, 0, 0, 0));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2005, 0
    /* Jan */
    , 1, 6, 0).getTime());

    _assert.default.deepStrictEqual(result, new Date(2004, 11
    /* Dec */
    , 26, 0, 0, 0, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0
    /* Jan */
    , 1);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11
    /* Dec */
    , 28);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);

    _assert.default.deepStrictEqual(result, expectedResult);
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2005, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    });

    _assert.default.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 3, 0, 0, 0, 0));
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2005, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, {
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

    _assert.default.deepStrictEqual(result, new Date(2005, 0
    /* Jan */
    , 3, 0, 0, 0, 0));
  });
});
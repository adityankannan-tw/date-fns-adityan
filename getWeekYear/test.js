"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getWeekYear', function () {
  it('returns the local week-numbering year of the given date', function () {
    var result = (0, _index.default)(new Date(2004, 11
    /* Dec */
    , 26));
    (0, _assert.default)(result === 2005);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2000, 11
    /* Dec */
    , 30).getTime());
    (0, _assert.default)(result === 2000);
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(7, 11
    /* Dec */
    , 31);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);
    (0, _assert.default)(result === 8);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2004, 11
    /* Dec */
    , 26);
    var result = (0, _index.default)(date, {
      // @ts-expect-error
      locale: {
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    });
    (0, _assert.default)(result === 2004);
  });
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2004, 11
    /* Dec */
    , 26);
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
    (0, _assert.default)(result === 2004);
  });
});
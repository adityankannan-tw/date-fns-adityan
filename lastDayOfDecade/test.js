"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('lastDayOfDecade', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a decade', function () {
    var date = new Date(1985, 9
    /* Oct */
    , 20);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(1989, 11
    /* Dec */
    , 31));
  });
  it('accepts a timestamp', function () {
    var date = new Date(1975, 0
    /* Jan */
    , 19).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(1979, 11
    /* Dec */
    , 31));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2013, 3
    /* Apr */
    , 23);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2013, 3
    /* Apr */
    , 23));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
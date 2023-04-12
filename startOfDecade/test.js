"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfDecade', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', function () {
    var date = new Date(1953, 3
    /* Apr */
    , 13);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(1950, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var date = new Date(1984, 9
    /* Oct */
    , 14).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(1980, 0
    /* Jan */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(1978, 10
    /* Nov */
    , 14);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(1978, 10
    /* Nov */
    , 14));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
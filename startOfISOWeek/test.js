"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfISOWeek', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 1
    /* Feb */
    , 11, 11, 55, 0).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 1
    /* Feb */
    , 10));
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
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfMinute', function () {
  it('returns the date with the time set to the first millisecond of a minute', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15));
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15).getTime();
    var result = (0, _index.default)(date);

    _assert.default.deepStrictEqual(result, new Date(2014, 11
    /* Dec */
    , 1, 22, 15));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 11
    /* Dec */
    , 1, 22, 15, 45, 400));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
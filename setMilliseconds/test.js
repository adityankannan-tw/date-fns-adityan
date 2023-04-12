"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setMilliseconds', function () {
  it('sets the milliseconds', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500), 300);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 300));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 15, 750).getTime(), 755);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 15, 755));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500);
    (0, _index.default)(date, 137);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 300);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
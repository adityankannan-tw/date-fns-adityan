"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setHours', function () {
  it('sets the amount of hours', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30), 4);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 4, 30));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11).getTime(), 5);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 5));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1, 11);
    (0, _index.default)(date, 12);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1, 11));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 4);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
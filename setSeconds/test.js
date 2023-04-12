"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500), 45);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 45, 500));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 15).getTime(), 45);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 45));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40);
    (0, _index.default)(date, 15);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 45);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 11, 30, 40, 500), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
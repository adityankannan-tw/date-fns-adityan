"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('addMilliseconds', function () {
  it('adds the given number of milliseconds', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), 750);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 750));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0).getTime(), 500);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 500));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0);
    (0, _index.default)(date, 250);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 750);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 45, 30, 0), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
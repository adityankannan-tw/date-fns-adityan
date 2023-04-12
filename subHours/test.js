"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('subHours', function () {
  it('subtracts the given numbers of hours', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 11, 1, 0), 2);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 23, 0));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 12, 1, 0).getTime(), 26);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 23, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 23, 0);
    (0, _index.default)(date, 10);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 23, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 2);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 11, 1, 0), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
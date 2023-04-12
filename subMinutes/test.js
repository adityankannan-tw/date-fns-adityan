"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('subMinutes', function () {
  it('subtracts the given number of minutes', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 0), 30);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 11, 30));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 0).getTime(), 20);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 11, 40));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 0);
    (0, _index.default)(date, 25);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 30);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 0), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isSameSecond', function () {
  it('returns true if the given dates have the same second', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 4, 6, 30, 15), new Date(2014, 8
    /* Sep */
    , 4, 6, 30, 15, 500));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given dates have different seconds', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 4, 6, 30, 58, 999), new Date(2014, 8
    /* Sep */
    , 4, 6, 30, 59));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 4, 18, 45, 30).getTime(), new Date(2014, 8
    /* Sep */
    , 4, 18, 45, 30, 400).getTime());
    (0, _assert.default)(result === true);
  });
  it('returns false if the first date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(1989, 6
    /* Jul */
    , 10));
    (0, _assert.default)(result === false);
  });
  it('returns false if the second date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(1987, 1
    /* Feb */
    , 11), new Date(NaN));
    (0, _assert.default)(result === false);
  });
  it('returns false if the both dates are `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), new Date(NaN));
    (0, _assert.default)(result === false);
  });
});
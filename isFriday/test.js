"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 26));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is not Friday', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 25));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 1
    /* Feb */
    , 14).getTime());
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result === false);
  });
});
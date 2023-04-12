"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getDecade', function () {
  it('returns the decade for a the given date', function () {
    var result = (0, _index.default)(new Date(1971, 10
    /* Nov */
    , 8));
    (0, _assert.default)(result === 1970);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(1969, 6
    /* Jul */
    , 20).getTime());
    (0, _assert.default)(result === 1960);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});
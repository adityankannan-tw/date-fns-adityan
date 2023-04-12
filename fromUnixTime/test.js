"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('fromUnixTime', function () {
  it('returns the date derived from the given UNIX timestamp', function () {
    var result = (0, _index.default)(1330515499);
    (0, _assert.default)(result.getTime() === 1330515499000);
  });
  it('returns invalid if the given timestamp is invalid', function () {
    var result = (0, _index.default)(NaN);
    (0, _assert.default)(isNaN(result.getTime()));
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('secondsToMilliseconds', function () {
  it('converts seconds to milliseconds', function () {
    (0, _assert.default)((0, _index.default)(1) === 1000);
    (0, _assert.default)((0, _index.default)(2) === 2000);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 1500);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
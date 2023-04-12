"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('millisecondsToSeconds', function () {
  it('converts milliseconds to seconds', function () {
    (0, _assert.default)((0, _index.default)(1000) === 1);
    (0, _assert.default)((0, _index.default)(2000) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(1001) === 1);
    (0, _assert.default)((0, _index.default)(999) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1000.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
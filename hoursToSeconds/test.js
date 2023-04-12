"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('hoursToSeconds', function () {
  it('converts hours to seconds', function () {
    (0, _assert.default)((0, _index.default)(1) === 3600);
    (0, _assert.default)((0, _index.default)(2) === 7200);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(0.123) === 442);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 5400);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
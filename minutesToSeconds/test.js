"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('minutesToSeconds', function () {
  it('converts minutes to seconds', function () {
    (0, _assert.default)((0, _index.default)(1) === 60);
    (0, _assert.default)((0, _index.default)(2) === 120);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(0.123456) === 7);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 90);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
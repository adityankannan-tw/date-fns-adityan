"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('weeksToDays', function () {
  it('converts weeks to days', function () {
    (0, _assert.default)((0, _index.default)(1) === 7);
    (0, _assert.default)((0, _index.default)(2) === 14);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 10);
    (0, _assert.default)((0, _index.default)(0.1) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 10);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('quartersToMonths', function () {
  it('converts quarters to months', function () {
    (0, _assert.default)((0, _index.default)(1) === 3);
    (0, _assert.default)((0, _index.default)(2) === 6);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 4);
    (0, _assert.default)((0, _index.default)(0.3) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(0.4) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
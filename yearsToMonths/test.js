"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('yearsToMonths', function () {
  it('converts years to months', function () {
    (0, _assert.default)((0, _index.default)(1) === 12);
    (0, _assert.default)((0, _index.default)(2) === 24);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(1.7) === 20);
    (0, _assert.default)((0, _index.default)(0.1) === 1);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 18);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('yearsToQuarters', function () {
  it('converts years to quarters', function () {
    (0, _assert.default)((0, _index.default)(1) === 4);
    (0, _assert.default)((0, _index.default)(2) === 8);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(1.3) === 5);
    (0, _assert.default)((0, _index.default)(0.2) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(1.5) === 6);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('quartersToYears', function () {
  it('converts quarters to years', function () {
    (0, _assert.default)((0, _index.default)(4) === 1);
    (0, _assert.default)((0, _index.default)(8) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(5) === 1);
    (0, _assert.default)((0, _index.default)(3) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(4.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
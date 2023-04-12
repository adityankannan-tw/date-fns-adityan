"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('monthsToQuarters', function () {
  it('converts months to quarters', function () {
    (0, _assert.default)((0, _index.default)(3) === 1);
    (0, _assert.default)((0, _index.default)(6) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(4) === 1);
    (0, _assert.default)((0, _index.default)(2) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(3.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
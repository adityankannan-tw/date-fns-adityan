"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('secondsToMinutes', function () {
  it('converts seconds to minutes', function () {
    (0, _assert.default)((0, _index.default)(60) === 1);
    (0, _assert.default)((0, _index.default)(120) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(61) === 1);
    (0, _assert.default)((0, _index.default)(59) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(60.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
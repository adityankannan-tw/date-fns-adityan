"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('millisecondsToMinutes', function () {
  it('converts milliseconds to minutes', function () {
    (0, _assert.default)((0, _index.default)(60000) === 1);
    (0, _assert.default)((0, _index.default)(120000) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(60001) === 1);
    (0, _assert.default)((0, _index.default)(59999) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(60000.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
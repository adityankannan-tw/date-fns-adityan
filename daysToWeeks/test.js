"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('daysToWeeks', function () {
  it('converts days to weeks', function () {
    (0, _assert.default)((0, _index.default)(7) === 1);
    (0, _assert.default)((0, _index.default)(14) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(8) === 1);
    (0, _assert.default)((0, _index.default)(6) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(7.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
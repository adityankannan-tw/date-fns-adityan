"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('monthsToYears', function () {
  it('converts months to years', function () {
    (0, _assert.default)((0, _index.default)(12) === 1);
    (0, _assert.default)((0, _index.default)(24) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(13) === 1);
    (0, _assert.default)((0, _index.default)(11) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(12.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});
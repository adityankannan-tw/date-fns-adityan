"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('secondsToHours', function () {
  it('converts seconds to hours', function () {
    (0, _assert.default)((0, _index.default)(3600) === 1);
    (0, _assert.default)((0, _index.default)(7200) === 2);
  });
  it('uses floor rounding', function () {
    (0, _assert.default)((0, _index.default)(3601) === 1);
    (0, _assert.default)((0, _index.default)(3599) === 0);
  });
  it('handles border values', function () {
    (0, _assert.default)((0, _index.default)(3600.5) === 1);
    (0, _assert.default)((0, _index.default)(0) === 0);
  });
});